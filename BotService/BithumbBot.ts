import ApiBithumb from "node-bithumb";
import bithumbApi from "../ApiService/bithumb";
import config from 'config';
import UtilService from "../UtilService/utilService";
import Redis from "ioredis";

export default class BithumbBot {
  private readonly payment_currency = "KRW";  // 화폐단위
  private readonly api_key: string = config.get("bithumb.api_key");
  private readonly secret_key: string = config.get("bithumb.secret_key");

  private ApiBithumb = new ApiBithumb(this.api_key, this.secret_key, this.payment_currency);
  private AdApiBithumb = new bithumbApi();
  private util = new UtilService();
  private redis = new Redis({
    db: 0,
  })

  public async volatilityBreakthroughBuyBot(coin_code: string, buy_price: number, time: "1m" | "3m" | "5m" | "10m" | "30m" | "1h" | "6h" | "12h" | "24h") {
    let last_start_price: number|undefined;
    let last_last_price: number|undefined;
    let last_high_price: number|undefined;
    let last_low_price: number|undefined;
    let k: number|undefined;

    const candle_sticks = await this.AdApiBithumb.getCandleStick(coin_code, time);
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
    const transaction_historys = await this.ApiBithumb.getTransactionHistory(coin_code);
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
    const balance = await this.ApiBithumb.postBalance(coin_code);
    const has_coin_count = Math.floor(Number(balance.data[`total_${coin_code.toLowerCase()}`])*10000)/10000 || 0;
    // 이미 구매를 한 경우 구입하지 않는다. 
    if (has_coin_count+(has_coin_count*0.1) >= buy_price_coin_count) {
      return false;
    }

    const buy_result = await this.AdApiBithumb.marketBuy(coin_code, buy_price_coin_count);

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
    const balance = await this.AdApiBithumb.getBalance(coin_code);
    const order_count = Math.floor(Number(balance.data[`total_${coin_code.toLowerCase()}`])*10000)/10000 || 0;
    const result = await this.AdApiBithumb.marketSell(coin_code, order_count);
    console.log("SellAllCoin", JSON.stringify({
      coin_code: coin_code, 
      is_selled: result,
    }));
  }

  public async volatilityBreakthroughStopLose(coin_code: string) {
    const user_transactions = await this.AdApiBithumb.getPrivateTransactions(coin_code)
    if (user_transactions.data.length === 0) {
      return;
    }
    const last_user_transaction = user_transactions.data[0];
    const last_user_transaction_price = Number(last_user_transaction.price) || 0;

    const transactions = await this.AdApiBithumb.getTransactionHistory(coin_code);
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

  public async buyRandomCoin(buy_price: number) {
    let random_coin_code: string;
    let loop_cnt = 0;

    const order_book = await this.AdApiBithumb.getOrderBook("all");
    delete order_book.data.timestamp;
    delete order_book.data.payment_currency;

    const coin_list = Object.keys(order_book.data);

    while (true) {
      if (loop_cnt >= 5) {
        return false;
      }
      random_coin_code = coin_list[Math.floor(Math.random()*coin_list.length)];
      const check_overlap = await this.redis.get(random_coin_code);
      if (!check_overlap) {
        break;
      }
      loop_cnt++;
    }


    const buy_price_coin_count = await this.util.getBuyCoinCount(random_coin_code, buy_price);
    const buy_result = await this.AdApiBithumb.marketBuy(random_coin_code, buy_price_coin_count);

    await this.redis.set(random_coin_code, buy_price_coin_count);

    if (buy_result) {
      return true;
    }
    return false;
  }

  public async sellAllCoin() {
    const coin_code_list = await this.redis.keys("*");

    for (const coin_code of coin_code_list) {
      const coin_count = await this.redis.get(coin_code);
      if (coin_code || coin_count) {
        await this.AdApiBithumb.marketSell(coin_code, Number(coin_count));
        await this.redis.del(coin_code);
      }
    }
  }
}
