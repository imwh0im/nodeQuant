import bithumbApi from "../ApiService/bithumb";
import UtilService from "../UtilService/utilService";

export default class BithumbBot {
  private bitApi = new bithumbApi();
  private util = new UtilService();

  public async volatilityBreakthroughBuyBot(coin_code: string, buy_price: number, time: string) {
    // const balance = await this.bitApi.getBalance(coin_code);
    // const has_coin_count = Number(balance.data.total_btc);
    // if (has_coin_count >= 0.0001) {
    //   const result = await this.bitApi.marketSell(coin_code, 0.0002);
    //   console.log("sell result: ", result);
    // }

    // console.log(`check1:\n has_coin_count: ${has_coin_count}`);
    
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

    console.log(`check2: \n k: ${k}`);

    if (!last_start_price || !last_last_price || !last_high_price || !last_low_price || !k) {
      throw new Error(`candle sticks 가 없습니다. `);
    }

    const average = (last_high_price - last_low_price) * k;
    const goal_price = Number(last_last_price) + Number(average);
    const transaction_historys = await this.bitApi.getTransactionHistory(coin_code);
    const transaction_history = transaction_historys.data.pop();
    const now_price = transaction_history ? transaction_history.price : last_last_price;

    console.log(`check3:\n average: ${average}, 목표가: ${goal_price}, 현재가: ${now_price}`)

    if (goal_price > now_price) {
      return false;
    }
    console.log("is Buyed!!");
    const buy_price_coin_count = await this.util.getBuyCoinCount(coin_code, buy_price);
    console.log("buy_price_coin_count", buy_price_coin_count);
    const buy_result = await this.bitApi.marketBuy(coin_code, buy_price_coin_count);

    console.log(`check4:\n 구매여부: ${buy_result}, 구매갯수: ${buy_price_coin_count}`);

    if (!buy_result) {
      return false;
    }
    return true;
  }

  public async volatilityBreakthroughsellAllCoin(coin_code: string) {
    const balance = await this.bitApi.getBalance(coin_code);
    const has_coin_count = Number(balance.data.total_btc).toFixed(4);
    console.log(has_coin_count);
    if (Number(has_coin_count) >= 0.0001) {
      const result = await this.bitApi.marketSell(coin_code, Number(has_coin_count));
      console.log("sell result: ", result);
    }
  }
}