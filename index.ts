import cron from "node-cron";
import BithumbBot from "./BotService/BithumbBot";
import moment from "moment";

const bitBot = new BithumbBot();

async function sleep (ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}  

// cron.schedule("*/1 * * * *", async () => {
//   console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} 1m running bot`);
//   await bitBot.volatilityBreakthrough("BTC", 10000, "1m");
// });

// cron.schedule("*/3 * * * *", async () => {
//   console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} 3m running bot`);
//   await bitBot.volatilityBreakthrough("BTC", 10000, "3m");
// });

cron.schedule("*/1 * * * *", async () => {
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} 5m Buy running bot`);
  await bitBot.volatilityBreakthroughBuyBot("BTC", 20000, "5m");
});

cron.schedule("*/5 * * * *", async () => {
  console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} 5m Sell running bot`);
  await bitBot.volatilityBreakthroughsellAllCoin("BTC");
});

// cron.schedule("*/10 * * * *", async () => {
//   console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} 10m running bot`);
//   await bitBot.volatilityBreakthrough("BTC", 10000, "10m");
// });

// cron.schedule("*/30 * * * *", async () => {
//   console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} 30m running bot`);
//   await bitBot.volatilityBreakthrough("BTC", 10000, "30m");
// });
