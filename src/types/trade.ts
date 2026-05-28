export interface Trade {
  symbol: string;
  type: "BUY" | "SELL";
  quantity: number;
  price: number;
  date: string;
}

export interface HoldingSummary {
  symbol: string;
  quantity: number;
  currentPrice: number;
  investedAmount: number;
  realizedPnL: number;
  unrealizedPnL: number;
  netPnL: number;
  trueBreakEven: number;
}