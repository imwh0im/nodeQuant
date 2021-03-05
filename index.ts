import cron from "node-cron";
import BithumbBot from "./BotService/BithumbBot";
import moment from "moment";

const buy_price = 100000;

cron.schedule("1 0 * * *", async () => {
  const bitBot = new BithumbBot();
  await bitBot.sellAllCoin();
})

cron.schedule("2 0 * * *", async () => {
  const bitBot = new BithumbBot();
  for (var i = 1; i <= 6; i++) {
    await bitBot.buyRandomCoin(buy_price);
  } 
})

// BTC 봉

// cron.schedule("*/1 * * * *", async () => {
//   const bitBot = new BithumbBot();
//   if (!["00", "01", "02"].includes(moment().format("mm"))) {
//     console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BTC 6h Buy running bot`);
//     await bitBot.volatilityBreakthroughBuyBot("BTC", buy_price, "6h");  
//   }
//   // 손절 2%
//   await bitBot.volatilityBreakthroughStopLose("BTC");
// });

// cron.schedule("0 */6 * * *", async () => {
//   const bitBot = new BithumbBot();
//   console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BTC 6h Sell running bot`);
//   await bitBot.volatilityBreakthroughsellAllCoin("BTC");
// });

// // ETH 봉

// cron.schedule("*/1 * * * *", async () => {
//   const bitBot = new BithumbBot();
//   if (!["00", "01", "02"].includes(moment().format("mm"))) {
//     console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ETH 6h Buy running bot`);
//     await bitBot.volatilityBreakthroughBuyBot("ETH", buy_price, "6h");  
//   }
//   // 손절 2%
//   await bitBot.volatilityBreakthroughStopLose("ETH");
// });
 
// cron.schedule("0 */6 * * *", async () => {
//   const bitBot = new BithumbBot();
//   console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ETH 6h Sell running bot`);
//   await bitBot.volatilityBreakthroughsellAllCoin("ETH");
// });

// // ADA 봉

// cron.schedule("*/1 * * * *", async () => {
//   const bitBot = new BithumbBot();
//   if (!["00", "01", "02"].includes(moment().format("mm"))) {
//     console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ADA 6h Buy running bot`);
//     await bitBot.volatilityBreakthroughBuyBot("ADA", buy_price, "6h");  
//   }
//   // 손절 2%
//   await bitBot.volatilityBreakthroughStopLose("ADA");
// });

// cron.schedule("0 */6 * * *", async () => {
//   const bitBot = new BithumbBot();
//   console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} ADA 6h Sell running bot`);
//   await bitBot.volatilityBreakthroughsellAllCoin("ADA");
// });

// // XRP 봉

// cron.schedule("*/1 * * * *", async () => {
//   const bitBot = new BithumbBot();
//   if (!["00", "01", "02"].includes(moment().format("mm"))) {
//     console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XRP 6h Buy running bot`);
//     await bitBot.volatilityBreakthroughBuyBot("XRP", buy_price, "6h");  
//   }
//   // 손절 2%
//   await bitBot.volatilityBreakthroughStopLose("XRP");
// });

// cron.schedule("0 */6 * * *", async () => {
//   const bitBot = new BithumbBot();
//   console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XRP 6h Sell running bot`);
//   await bitBot.volatilityBreakthroughsellAllCoin("XRP");
// });

// // XLM 봉

// cron.schedule("*/1 * * * *", async () => {
//   const bitBot = new BithumbBot();
//   if (!["00", "01", "02"].includes(moment().format("mm"))) {
//     console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XLM 6h Buy running bot`);
//     await bitBot.volatilityBreakthroughBuyBot("XLM", buy_price, "6h");  
//   }
//   // 손절 2%
//   await bitBot.volatilityBreakthroughStopLose("XLM");
// });

// cron.schedule("0 */6 * * *", async () => {
//   const bitBot = new BithumbBot();
//   console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} XLM 6h Sell running bot`);
//   await bitBot.volatilityBreakthroughsellAllCoin("XLM");
// });

// // EOS 봉

// cron.schedule("*/1 * * * *", async () => {
//   const bitBot = new BithumbBot();
//   if (!["00", "01", "02"].includes(moment().format("mm"))) {
//     console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} EOS 6h Buy running bot`);
//     await bitBot.volatilityBreakthroughBuyBot("EOS", buy_price, "6h");  
//   }
//   // 손절 2%
//   await bitBot.volatilityBreakthroughStopLose("EOS");
// });

// cron.schedule("0 */6 * * *", async () => {
//   const bitBot = new BithumbBot();
//   console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} EOS 6h Sell running bot`);
//   await bitBot.volatilityBreakthroughsellAllCoin("EOS");
// });

// // BCH 봉

// cron.schedule("*/1 * * * *", async () => {
//   const bitBot = new BithumbBot();
//   if (!["00", "01", "02"].includes(moment().format("mm"))) {
//     console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BCH 6h Buy running bot`);
//     await bitBot.volatilityBreakthroughBuyBot("BCH", buy_price, "6h");  
//   }
//   // 손절 2%
//   await bitBot.volatilityBreakthroughStopLose("BCH");
// });

// cron.schedule("0 */6 * * *", async () => {
//   const bitBot = new BithumbBot();
//   console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BCH 6h Sell running bot`);
//   await bitBot.volatilityBreakthroughsellAllCoin("BCH");
// });

// // TRX 봉

// cron.schedule("*/1 * * * *", async () => {
//   const bitBot = new BithumbBot();
//   if (!["00", "01", "02"].includes(moment().format("mm"))) {
//     console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} TRX 6h Buy running bot`);
//     await bitBot.volatilityBreakthroughBuyBot("TRX", buy_price, "6h");  
//   }
//   // 손절 2%
//   await bitBot.volatilityBreakthroughStopLose("TRX");
// });

// cron.schedule("0 */6 * * *", async () => {
//   const bitBot = new BithumbBot();
//   console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} TRX 6h Sell running bot`);
//   await bitBot.volatilityBreakthroughsellAllCoin("TRX");
// });

// // LTC 봉

// cron.schedule("*/1 * * * *", async () => {
//   const bitBot = new BithumbBot();
//   if (!["00", "01", "02"].includes(moment().format("mm"))) {
//     console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} LTC 6h Buy running bot`);
//     await bitBot.volatilityBreakthroughBuyBot("LTC", buy_price, "6h");  
//   }
//   // 손절 2%
//   await bitBot.volatilityBreakthroughStopLose("LTC");
// });

// cron.schedule("0 */6 * * *", async () => {
//   const bitBot = new BithumbBot();
//   console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} LTC 6h Sell running bot`);
//   await bitBot.volatilityBreakthroughsellAllCoin("LTC");
// });

// // BSV 봉

// cron.schedule("*/1 * * * *", async () => {
//   const bitBot = new BithumbBot();
//   if (!["00", "01", "02"].includes(moment().format("mm"))) {
//     console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BSV 6h Buy running bot`);
//     await bitBot.volatilityBreakthroughBuyBot("BSV", buy_price, "6h");  
//   }
//   // 손절 2%
//   await bitBot.volatilityBreakthroughStopLose("BSV");
// });

// cron.schedule("0 */6 * * *", async () => {
//   const bitBot = new BithumbBot();
//   console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} BSV 6h Sell running bot`);
//   await bitBot.volatilityBreakthroughsellAllCoin("BSV");
// });

// // LINK 봉

// cron.schedule("*/1 * * * *", async () => {
//   const bitBot = new BithumbBot();
//   if (!["00", "01", "02"].includes(moment().format("mm"))) {
//     console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} LINK 6h Buy running bot`);
//     await bitBot.volatilityBreakthroughBuyBot("LINK", buy_price, "6h");  
//   }
//   // 손절 2%
//   await bitBot.volatilityBreakthroughStopLose("LINK");
// });

// cron.schedule("0 */6 * * *", async () => {
//   const bitBot = new BithumbBot();
//   console.log(`\n${moment().format("YYYY-MM-DD HH:mm:ss")} LINK 6h Sell running bot`);
//   await bitBot.volatilityBreakthroughsellAllCoin("LINK");
// });
