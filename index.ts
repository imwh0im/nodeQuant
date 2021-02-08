import cron from "node-cron";
import BithumbBot from "./BotService/BithumbBot";
import moment from "moment";



// BTC 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BTC 6h Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("BTC", 20000, "6h");
});

cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BTC 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("BTC");
});

// ETH 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ETH 6h Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("ETH", 20000, "6h");
});
 
cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ETH 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("ETH");
});

// ADA 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ADA 6h Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("ADA", 20000, "6h");
});

cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ADA 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("ADA");
});

// XRP 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XRP 6h Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("XRP", 20000, "6h");
});

cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XRP 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("XRP");
});

// XLM 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XLM 6h Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("XLM", 20000, "6h");
});

cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XLM 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("XLM");
});

// EOS 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} EOS 6h Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("EOS", 20000, "6h");
});

cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} EOS 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("EOS");
});

// BCH 봉

cron.schedule("*/1 * * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BCH 6h Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("BCH", 20000, "6h");
});

cron.schedule("0 */6 * * *", async () => {
  const bitBot = new BithumbBot();
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BCH 6h Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("BCH");
});
