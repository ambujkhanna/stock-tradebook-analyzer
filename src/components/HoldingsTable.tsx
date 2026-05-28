import { HoldingSummary } from "@/types/trade";

interface Props {
  data: HoldingSummary[];
}

export default function HoldingsTable({ data }: Props) {
  return (
    <div className="overflow-x-auto mt-8">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Qty</th>
            <th className="p-3 border">CMP</th>
            <th className="p-3 border">Realized</th>
            <th className="p-3 border">Unrealized</th>
            <th className="p-3 border">Net P&L</th>
            <th className="p-3 border">True Break-even</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.symbol}>
              <td className="p-3 border">{item.symbol}</td>
              <td className="p-3 border">{item.quantity}</td>
              <td className="p-3 border">₹{item.currentPrice.toFixed(2)}</td>
              <td className="p-3 border">
                ₹{item.realizedPnL.toFixed(2)}
              </td>
              <td className="p-3 border">
                ₹{item.unrealizedPnL.toFixed(2)}
              </td>
              <td
                className={`p-3 border font-semibold ${
                  item.netPnL >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                ₹{item.netPnL.toFixed(2)}
              </td>
              <td className="p-3 border">
                ₹{item.trueBreakEven.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}