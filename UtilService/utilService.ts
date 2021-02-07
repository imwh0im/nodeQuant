import bithumbApi from "../ApiService/bithumb";
import crypto from "crypto";
import querystring from "querystring";

export default class UtilService {
  private bitApi = new bithumbApi();
  private k_average_list: number[] = [];

  public getBitHumbHeaders(endpoint: string, parameters: any, api_key: string, secret_key: string) {
    const _nonce = this.nonce();
    console.log("_nonce: ", _nonce);
    const request_signature = endpoint + String.fromCharCode(0) + querystring.stringify(parameters) + String.fromCharCode(0) + _nonce;
    const hmac_signature = Buffer.from(crypto.createHmac('sha512', secret_key).update(request_signature).digest('hex')).toString('base64');
  
    return {
      'Api-Key': api_key,
      'Api-Sign': hmac_signature,
      'Api-Nonce': _nonce,
    } 
  }

  public async getBuyCoinCount(coin_code: string, pay_price: number) {
    const ticker = await this.bitApi.getTransactionHistory(coin_code);
    const now_coin_price = Number(ticker.data.pop()?.price);
    const buy_coin_count = Number((pay_price/now_coin_price).toFixed(4));

    return buy_coin_count;
  }

  public getKValue(last_high_price: number, last_low_price: number , last_start_price: number, last_last_price: number) {
    const k: number = Math.abs((last_start_price - last_last_price) / (last_high_price - last_low_price));
    this.k_average_list.push(k);

    if (this.k_average_list.length >= 20) {
      this.k_average_list.splice(0, 1);
    }

    let k_add_value: number = 0;
    let i: number = 0;
    for (let k of this.k_average_list) {
      i++;
      k = k >= 1 ? 1 : k;

      k_add_value += Number(k);
    }
    return k_add_value / i || 0.5;
  }
  
  private nonce() {
    return new Date().getTime();

    // const now = new Date().getTime() / 1000
    // const sec = parseInt(now.toString(), 10)
    // const usec = (Math.round((now - sec) * 1000) / 1000).toString().substr(2, 3)
  
    // return Number(String(sec) + String(usec))
  }
}
