# nodeQuant
 
```
npm i
```
---
```
1. add "config/default.json"
```
---
```json
default.json

{
  "bithumb": {
    "api_key": "{your api key}",
    "secret_key": "{your  secret key}"
  }
}
```
---

```
 + volatilityBreakthroughBuyBot(coin_code, buy_price, time)
  -> coin_code: 전략을 실행할 코인 코드
  -> buy_price: 전략 실행할 가격 (최소 10,000원)
  -> time: ("1m" | "3m" | "5m" | "10m" | "30m" | "1h" | "6h" | "12h" | "24h") 전략 기준 봉 선택
```
```
npm start
```