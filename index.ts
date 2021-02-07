import cron from "node-cron";
import BithumbBot from "./BotService/BithumbBot";
import moment from "moment";



async function sleep (ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}  

// BTC 10m 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BTC 10m Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("BTC", 10000, "10m");
});

cron.schedule("*/10 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BTC 10m Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("BTC");
});

// ETH 10m 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ETH 10m Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("ETH", 10000, "10m");
});
 
cron.schedule("*/10 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ETH 10m Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("ETH");
});

// ADA 10m 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ADA 10m Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("ADA", 10000, "10m");
});

cron.schedule("*/10 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ADA 10m Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("ADA");
});

// XRP 10m 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XRP 10m Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("XRP", 10000, "10m");
});

cron.schedule("*/10 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XRP 10m Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("XRP");
});

// XLM 10m 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XLM 10m Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("XLM", 10000, "10m");
});

cron.schedule("*/10 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XLM 10m Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("XLM");
});

// EOS 10m 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} EOS 10m Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("EOS", 10000, "10m");
});

cron.schedule("*/10 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} EOS 10m Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("EOS");
});
