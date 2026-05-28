import { HoldingSummary, Trade } from "@/types/trade";

const MOCK_CURRENT_PRICES: Record<string, number> = {
  RELIANCE: 3000,
  TCS: 4200,
  INFY: 1600,
  HDFCBANK: 1800,
};

export const calculatePnL = (trades: Trade[]): HoldingSummary[] => {
  const grouped: Record<string, Trade[]> = {};

  trades.forEach((trade) => {
    if (!grouped[trade.symbol]) {
      grouped[trade.symbol] = [];
    }

    grouped[trade.symbol].push(trade);
  });

  const summaries: HoldingSummary[] = [];

  Object.keys(grouped).forEach((symbol) => {
    const symbolTrades = grouped[symbol];

    let quantity = 0;
    let investedAmount = 0;
    let realizedPnL = 0;

    symbolTrades.forEach((trade) => {
      if (trade.type === "BUY") {
        quantity += trade.quantity;
        investedAmount += trade.quantity * trade.price;
      }

      if (trade.type === "SELL") {
        const avgCost = quantity > 0 ? investedAmount / quantity : 0;

        realizedPnL += (trade.price - avgCost) * trade.quantity;

        quantity -= trade.quantity;
        investedAmount -= avgCost * trade.quantity;
      }
    });

    const currentPrice = MOCK_CURRENT_PRICES[symbol] || 100;

    const currentValue = quantity * currentPrice;

    const unrealizedPnL = currentValue - investedAmount;

    const netPnL = realizedPnL + unrealizedPnL;

    const trueBreakEven =
      quantity > 0
        ? (investedAmount - realizedPnL) / quantity
        : 0;

    summaries.push({
      symbol,
      quantity,
      currentPrice,
      investedAmount,
      realizedPnL,
      unrealizedPnL,
      netPnL,
      trueBreakEven,
    });
  });

  return summaries;
};