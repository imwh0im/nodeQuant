
import bithumbApi from "../../ApiService/bithumb";
import moment from "moment";
import UtilService from "../../UtilService/utilService";
import BithumbBot from "../../BotService/BithumbBot";
import { util } from "config";

const BitApi = new bithumbApi();
const Util = new UtilService();
const BitBot = new BithumbBot();


test.skip("getOrderBook", async () => {
  const order_book = await BitApi.getOrderBook("BTC");
  console.log(JSON.stringify(order_book));
});

test.skip("getTicker", async () => {
  const ticker = await BitApi.getTicker("BTC");
  console.log(JSON.stringify(ticker));
});

test.skip("getCandleStick", async () => {
  const res = await BitApi.getCandleStick("BTC", "12h");
  const data = res.data;

  const first_res_date = moment.unix(res.data[0][0] / 1000 as number).format("YYYY-MM-DD HH:mm:ss");
  const last_res_date = moment.unix(res.data.pop()[0] / 1000 as number).format("YYYY-MM-DD HH:mm:ss");

  console.log(`first_time: ${first_res_date} \nlast_time: ${last_res_date}`);
});

test.skip("volatilityBreakthrough", async () => {
  const res = await BitApi.getCandleStick("BTC", "1m");

  let date: moment.Moment;
  let last_high_price: number|undefined; 
  let last_low_price: number|undefined;
  let last_start_price: number|undefined;
  let last_last_price: number|undefined;
  let win: number = 0;
  let lose: number = 0;
  let revenue: number = 0;
  const start_date = moment([2018, 1, 1]);  // 시뮬레이션 시작날짜
  let i = 0

  

  for (const by_hour of res.data) {
    i++;
    date = moment.unix(by_hour[0] / 1000);
    if (date < start_date) {
      continue;
    }

    const start_price = by_hour[1] as number;  // 시가
    const last_price = by_hour[2] as number;  // 종가
    const high_price = by_hour[3] as number;  // 고가
    const low_price = by_hour[4] as number; // 저가

    if (!last_high_price || !last_low_price || !last_start_price || !last_last_price) {
      last_start_price = start_price;  // 시가
      last_last_price = last_price; // 종가
      last_high_price = high_price; // 고가
      last_low_price = low_price;  // 저가
      continue;
    }

    const k = Util.getKValue(last_high_price, last_low_price, last_start_price, last_last_price);
    if (!k) {
      console.log(last_high_price, last_low_price, last_start_price, last_last_price);
      console.log("k: ", k)
    }
    const average = Math.floor((last_high_price - last_low_price) * k);
    const goal_price: number = Math.floor(Number(start_price) + Number(average));
    if (!goal_price) {
      console.log(date.format("YYYY-MM-DD HH:mm:ss"), start_price, average);
      break;
    }

    if (goal_price < last_high_price) {
      last_start_price = start_price;  // 시가
      last_last_price = last_price; // 종가
      last_high_price = high_price; // 고가
      last_low_price = low_price;  // 저가
      continue;
    }

    // 매수함.
    goal_price > last_price ? win++ : lose++;
    
    console.log("check_2: ", goal_price, last_price);
    const date_revenue = goal_price - last_price;

    console.log("check: ", date.format("YYYY-MM-DD HH:mm:ss") , date_revenue, revenue);
    revenue = revenue + date_revenue; // 수익계산

    last_high_price = high_price; // 고가
    last_low_price = low_price;  // 저가
    last_start_price = start_price;  // 시가
    last_last_price = last_price; // 종가
  }
  console.log(revenue);
  console.log(win, lose)
});

test.skip("getKValue", () => {
  console.log(Util.getKValue(12958000, 12958000, 12958000, 12958000));
});

test("marketBuy", async () => {
  const order_count = await Util.getBuyCoinCount("EOS", 10000);
  const res = await BitApi.marketBuy("EOS", parseFloat(order_count.toString()));
  console.log(res)
});

test("marketSell", async () => {
  const balance = await BitApi.getBalance("EOS");
  console.log("Res: ", JSON.stringify(balance));
  const total_coin = Number(balance.data.total_eos) || 0;
  const order_count = Math.floor(total_coin*10000)/10000;
  console.log(order_count);
  const res = await BitApi.marketSell("EOS", order_count);
  console.log(res)
});

test.skip("getBalance", async () => {
  const res = await BitApi.getBalance("BTC");
  console.log(res);
})

test.skip("getBuyCoinCount", async () => {
  const result = await Util.getBuyCoinCount("BTC", 10000);
})

test.skip("buyTest", async () => {
  const buy_result = await BitApi.marketBuy("BTC", 0.0001);
  console.log(buy_result);
})

test.skip("sellTest", async () => {
  const buy_result = await BitApi.marketSell("BTC", 0.0001);
  console.log(buy_result);
})

test.skip("buy count", async () => {
  const buy_price_coin_count = await Util.getBuyCoinCount("BTC", 10000);
  console.log(buy_price_coin_count);
})
