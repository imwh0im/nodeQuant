import { reverse } from "dns";
import { ConfigSet } from "ts-jest/dist/config/config-set";
import bithumbApi from "../ApiService/bithumb";
import UtilService from "../UtilService/utilService";

export default class BithumbBot {
  private bitApi = new bithumbApi();
  private util = new UtilService();

  public async volatilityBreakthroughBuyBot(coin_code: string, buy_price: number, time: "1m" | "3m" | "5m" | "10m" | "30m" | "1h" | "6h" | "12h" | "24h") {
    let last_start_price: number|undefined;
    let last_last_price: number|undefined;
    let last_high_price: number|undefined;
    let last_low_price: number|undefined;
    let k: number|undefined;

    const candle_sticks = await this.bitApi.getCandleStick(coin_code, time);
    for (const chart of candle_sticks.data) {
      last_start_price = chart[1] as number;  // 시가
      last_last_price = chart[2] as number;  // 종가
      last_high_price = chart[3] as number;  // 고가
      last_low_price = chart[4] as number; // 저가
      k = this.util.getKValue(last_last_price, last_low_price, last_start_price, last_low_price);
    }

    if (!last_start_price || !last_last_price || !last_high_price || !last_low_price || !k) {
      throw new Error(`candle sticks 가 없습니다. `);
    }

    const average = (last_high_price - last_low_price) * k;
    const goal_price = Number(last_last_price) + Number(average);
    const transaction_historys = await this.bitApi.getTransactionHistory(coin_code);
    const transaction_history = transaction_historys.data.pop();
    const now_price = transaction_history ? transaction_history.price : last_last_price;

    if (goal_price > now_price) {
      console.log("buy_bot", JSON.stringify({
        coin_code: coin_code,
        k: k,
        average: average,
        goal_price: goal_price,
        now_price: now_price,
      }));
      return false;
    }

    const buy_price_coin_count = await this.util.getBuyCoinCount(coin_code, buy_price);
    const balance = await this.bitApi.getBalance(coin_code);
    const has_coin_count = Math.floor(Number(balance.data[`total_${coin_code.toLowerCase()}`])*10000)/10000 || 0;
    // 이미 구매를 한 경우 구입하지 않는다. 
    if (has_coin_count+(has_coin_count*0.1) >= buy_price_coin_count) {
      return false;
    }

    const buy_result = await this.bitApi.marketBuy(coin_code, buy_price_coin_count);

    console.log("buy_bot", JSON.stringify({
      coin_code: coin_code,
      k: k,
      average: average,
      goal_price: goal_price,
      now_price: now_price,
      is_buyed: buy_result,
      buy_cnt: buy_result ? buy_price_coin_count : 0,
    }));

    if (!buy_result) {
      return false;
    }
    return true;
  }

  public async volatilityBreakthroughsellAllCoin(coin_code: string) {
    const balance = await this.bitApi.getBalance(coin_code);
    const order_count = Math.floor(Number(balance.data[`total_${coin_code.toLowerCase()}`])*10000)/10000 || 0;
    const result = await this.bitApi.marketSell(coin_code, order_count);
    console.log("SellAllCoin", JSON.stringify({
      coin_code: coin_code, 
      is_selled: result,
    }));
  }

  public async volatilityBreakthroughStopLose(coin_code: string) {
    const user_transactions = await this.bitApi.getPrivateTransactions(coin_code)
    if (user_transactions.data.length === 0) {
      return;
    }
    const last_user_transaction = user_transactions.data[0];
    const last_user_transaction_price = Number(last_user_transaction.price) || 0;

    const transactions = await this.bitApi.getTransactionHistory(coin_code);
    const last_transaction = transactions.data[0];
    const last_transaction_price = Number(last_transaction.price);

    console.log("stop lose", JSON.stringify({
      coin_code: coin_code,
      user_transactions: last_user_transaction_price,
      all_transactions: last_transaction_price,
    }));

    const revenue = ((last_transaction_price/last_user_transaction_price)-1)*100;
    if (-2 >= revenue) {
      await this.volatilityBreakthroughsellAllCoin(coin_code);
    }
  }
}
