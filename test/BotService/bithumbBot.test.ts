import bithumbApi from "../../ApiService/bithumb";
import bithumbBot from "../../BotService/BithumbBot";

const BitApi = new bithumbApi();
const BitBot = new bithumbBot();

test("getOrderBook", async () => {
  const res = await BitBot.buyRandomCoin(10000);
  console.log(JSON.stringify(res));
});

test("getUserBalance", async () => {
  const res = await BitBot.sellAllCoin();
  console.log(JSON.stringify(res));
})