import { timeStamp } from "console";

interface IOrderBookData {
  timestamp: number;
  order_currency: string;
  payment_currency: string;
  bids: [
    {
      quantity: string;
      price: string;
    }
  ];
  asks: [
    {
      quantity: string;
      price: string;
    }
  ]
}

interface ITicker {
  opening_price: string;
  closing_price: string;
  min_price: string;
  max_price: string;
  units_traded: string;
  acc_trade_value: string;
  prev_closing_price: string;
  units_traded_24H: string;
  acc_trade_value_24H: string;
  fluctate_24H: string;
  flutate_rate_24H: string;
  date: string;
}

interface IBalanceData {
  total_btc?: string;
  total_ada?: string;
  total_krw: string;
  in_use_btc: string;
  in_use_krw: string;
  available_btc: string;
  available_krw: string;
  xcoin_last_btc: string;
}

interface ITransactionHistory {
  transaction_date: string;
  type: string;
  units_traded: string;
  price: string;
  total: string;
}

interface IPrivateTransactions {
  search: string;
  transfer_data: number;
  order_currency: string;
  payment_currency: string;
  units: string;
  price: string;
  amount: string;
  fee_currency: string;
  fee: string;
  order_balance: string;
  payment_balance: string;
}

export interface IGetOrderBook {
    status: string;
    data: IGetOrderBookData
  }

export interface IGetTicker {
	status: string;
	data: ITicker;
}

export interface IGetCandleStick {
  status: string;
  data: any;  // object 안에 랜덤한 Array 가 들어가 있음. Array 구조: [기준 timestamp 12자리, 시가, 종가, 고가, 저가, 거래량]
}

export interface IMarketOrder {
  status: string;
  order_id: string;
}

export interface IGetBalance {
  status: string;
  data: IBalanceData | any;
}

export interface IGetTransactionHistory {
  status: string;
  data: ITransactionHistory[];
}

export interface IGetPrivateTransactions {
  status: string;
  data: IPrivateTransactions[];
}
