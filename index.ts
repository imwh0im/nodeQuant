import cron from "node-cron";
import BithumbBot from "./BotService/BithumbBot";
import moment from "moment";



async function sleep (ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}  

// BTC 30m 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BTC 30m Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("BTC", 20000, "30m");
});

cron.schedule("*/30 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BTC 30m Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("BTC");
});

// ETH 30m 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ETH 30m Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("ETH", 20000, "30m");
});
 
cron.schedule("*/30 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ETH 30m Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("ETH");
});

// ADA 30m 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ADA 30m Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("ADA", 20000, "30m");
});

cron.schedule("*/30 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ADA 30m Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("ADA");
});

// XRP 30m 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XRP 30m Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("XRP", 20000, "30m");
});

cron.schedule("*/30 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XRP 30m Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("XRP");
});

// XLM 30m 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XLM 30m Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("XLM", 20000, "30m");
});

cron.schedule("*/30 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XLM 30m Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("XLM");
});

// EOS 30m 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} EOS 30m Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("EOS", 20000, "30m");
});

cron.schedule("*/30 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} EOS 30m Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("EOS");
});

// BCH 30m 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BCH 30m Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("BCH", 20000, "30m");
});

cron.schedule("*/30 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BCH 30m Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("BCH");
});
