import Papa from "papaparse";
import { Trade } from "@/types/trade";

export const parseCsv = (file: File): Promise<Trade[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const trades: Trade[] = results.data.map((row: any) => ({
            symbol: row.symbol || row.Symbol || row.tradingsymbol,
            type: (row.type || row.Type || row.transaction_type)?.toUpperCase(),
            quantity: Number(row.quantity || row.Quantity),
            price: Number(row.price || row.Price),
            date: row.date || row.Date,
          }));

          resolve(trades);
        } catch (error) {
          reject(error);
        }
      },
      error: (error) => reject(error),
    });
  });
};