import cron from "node-cron";
import BithumbBot from "./BotService/BithumbBot";
import moment from "moment";

let last_sell_date: moment.Moment = moment();

// BTC 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  if (!["00", "01", "02"].includes(moment().format("mm"))) {
    console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BTC 6h Buy running bot`);
    await bitBot.volatilityBreakthroughBuyBot("BTC", 50000, "6h");  
  }
  // 손절 2%
  await bitBot.volatilityBreakthroughStopLose("BTC");
});

cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BTC 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("BTC");
  last_sell_date = moment();
});

// ETH 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  if (!["00", "01", "02"].includes(moment().format("mm"))) {
    console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ETH 6h Buy running bot`);
    await bitBot.volatilityBreakthroughBuyBot("ETH", 50000, "6h");  
  }
  // 손절 2%
  await bitBot.volatilityBreakthroughStopLose("ETH");
});
 
cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ETH 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("ETH");
});

// ADA 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  if (!["00", "01", "02"].includes(moment().format("mm"))) {
    console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ADA 6h Buy running bot`);
    await bitBot.volatilityBreakthroughBuyBot("ADA", 50000, "6h");  
  }
  // 손절 2%
  await bitBot.volatilityBreakthroughStopLose("ADA");
});

cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ADA 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("ADA");
});

// XRP 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  if (!["00", "01", "02"].includes(moment().format("mm"))) {
    console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XRP 6h Buy running bot`);
    await bitBot.volatilityBreakthroughBuyBot("XRP", 50000, "6h");  
  }
  // 손절 2%
  await bitBot.volatilityBreakthroughStopLose("XRP");
});

cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XRP 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("XRP");
});

// XLM 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  if (!["00", "01", "02"].includes(moment().format("mm"))) {
    console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XLM 6h Buy running bot`);
    await bitBot.volatilityBreakthroughBuyBot("XLM", 50000, "6h");  
  }
  // 손절 2%
  await bitBot.volatilityBreakthroughStopLose("XLM");
});

cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XLM 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("XLM");
});

// EOS 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  if (!["00", "01", "02"].includes(moment().format("mm"))) {
    console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} EOS 6h Buy running bot`);
    await bitBot.volatilityBreakthroughBuyBot("EOS", 50000, "6h");  
  }
  // 손절 2%
  await bitBot.volatilityBreakthroughStopLose("EOS");
});

cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} EOS 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("EOS");
});

// BCH 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  if (!["00", "01", "02"].includes(moment().format("mm"))) {
    console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BCH 6h Buy running bot`);
    await bitBot.volatilityBreakthroughBuyBot("BCH", 50000, "6h");  
  }
  // 손절 2%
  await bitBot.volatilityBreakthroughStopLose("BCH");
});

cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BCH 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("BCH");
});

// TRX 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  if (!["00", "01", "02"].includes(moment().format("mm"))) {
    console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} TRX 6h Buy running bot`);
    await bitBot.volatilityBreakthroughBuyBot("TRX", 50000, "6h");  
  }
  // 손절 2%
  await bitBot.volatilityBreakthroughStopLose("TRX");
});

cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} TRX 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("TRX");
});

// LTC 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  if (!["00", "01", "02"].includes(moment().format("mm"))) {
    console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} LTC 6h Buy running bot`);
    await bitBot.volatilityBreakthroughBuyBot("LTC", 50000, "6h");  
  }
  // 손절 2%
  await bitBot.volatilityBreakthroughStopLose("LTC");
});

cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} LTC 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("LTC");
});

// BSV 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  if (!["00", "01", "02"].includes(moment().format("mm"))) {
    console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BSV 6h Buy running bot`);
    await bitBot.volatilityBreakthroughBuyBot("BSV", 50000, "6h");  
  }
  // 손절 2%
  await bitBot.volatilityBreakthroughStopLose("BSV");
});

cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BSV 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("BSV");
});

// LINK 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  if (!["00", "01", "02"].includes(moment().format("mm"))) {
    console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} LINK 6h Buy running bot`);
    await bitBot.volatilityBreakthroughBuyBot("LINK", 50000, "6h");  
  }
  // 손절 2%
  await bitBot.volatilityBreakthroughStopLose("LINK");
});

cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} LINK 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("LINK");
});
