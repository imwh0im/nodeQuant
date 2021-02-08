import request from "request-promise";
import { IGetOrderBook, IGetTicker, IGetCandleStick, IMarketOrder, IGetTransactionHistory, IGetBalance } from "../types/bithumb";
import config from "config";
import UtilService from "../UtilService/utilService";


export default class bithumbApi {
  private readonly payment_currency: string = "KRW";  // 화폐단위
  private k_averate_list: number[] = [];
  private api_key: string = config.get("bithumb.api_key");
  private secret_key: string = config.get("bithumb.secret_key");
  private api_url: string = "https://api.bithumb.com";

  public async getTicker(coin_code: string) {
    const res: IGetTicker = await request({
      method: "GET",
      url: `https://api.bithumb.com/public/ticker/${coin_code}_${this.payment_currency}`,
      json: true,
    });

    if (res.status !== "0000") {
      throw new Error(`에러 발생: ${res}`)
    }
    return res;
  }

  public async getOrderBook(coin_code: string) {
    const res: IGetOrderBook = await request({
      method: "GET",
      url: `https://api.bithumb.com/public/orderbook/${coin_code}_${this.payment_currency}`,
      json: true,
    });

    if (res.status !== "0000") {
      throw new Error(`에러 발생: ${res}`);
    }
    return res;
  }

  public async getTransactionHistory(coin_code: string) {
    const res: IGetTransactionHistory = await request({
      method: "GET",
      url: `https://api.bithumb.com/public/transaction_history/${coin_code}_${this.payment_currency}`,
      json: true
    });

    if (res.status !== "0000") {
      throw new Error(`에러 발생: ${res}`);
    }
    return res;
  }

  public async getCandleStick(coin_code: string, chart_intervals: string = "24h") {
    const res: IGetCandleStick = await request({
      method: "GET",
      url : `https://api.bithumb.com/public/candlestick/${coin_code}_${this.payment_currency}/${chart_intervals}`,
      json: true,
    });

    if (res.status !== "0000") {
      throw new Error(`에러발생: ${res}`);
    }
    res.data.pop()

    return res;
  }

  public async getBalance(coin_code: string = "BTC") {
    const Util = new UtilService();
    const endpoint = "/info/balance";
    const parameters = {currency: coin_code, endpoint,};
    const headers = Util.getBitHumbHeaders(endpoint, parameters, this.api_key, this.secret_key);

    const res: IGetBalance = await request({
      method: "POST",
      url: "https://api.bithumb.com/info/balance",
      formData: parameters,
      headers: headers,
      json: true,
    });

    if (res.status !== "0000") {
      throw new Error(JSON.stringify(res));
    }
    return res;

  }

  public async marketBuy(coin_code: string, until_price: number) {
    const Util = new UtilService();
    const endpoint = "/trade/market_buy";
    const parameters = {units: until_price, order_currency: coin_code, payment_currency: this.payment_currency, endpoint};
    const headers = Util.getBitHumbHeaders(endpoint, parameters, this.api_key, this.secret_key);

    const res: IMarketOrder = await request({
      method: "POST",
      url: this.api_url+endpoint,
      formData: parameters,
      headers: headers,
      json: true,
    });

    console.log("buy", res);
    if (res.status !== "0000") {
      return false
    }
    return true
  }

  public async marketSell(coin_code: string, untit_price: number) {
    const Util = new UtilService();
    const endpoint = "/trade/market_sell";
    const parameters = {units: untit_price, order_currency: coin_code, payment_currency: this.payment_currency, endpoint};
    const headers = Util.getBitHumbHeaders(endpoint, parameters, this.api_key, this.secret_key);

    console.log("sell");
    let res: IMarketOrder;
    try{
      res = await request({
        method: "POST",
        url: this.api_url+endpoint,
        formData: parameters,
        headers: headers,
        json: true,
      });
    } catch (err) {
      return false;
    }
    
    console.log(res);
    if (res.status !== "0000") {
      return false;
    }
    return true;
  }
}
