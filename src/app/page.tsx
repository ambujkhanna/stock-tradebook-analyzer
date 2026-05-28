"use client";

import { useState } from "react";
import CsvUploader from "@/components/CsvUploader";
import HoldingsTable from "@/components/HoldingsTable";
import { parseCsv } from "@/utils/parseCsv";
import { calculatePnL } from "@/engine/calculatePnL";
import { HoldingSummary } from "@/types/trade";

export default function Home() {
  const [data, setData] = useState<HoldingSummary[]>([]);

  const handleFile = async (file: File) => {
    const trades = await parseCsv(file);

    const result = calculatePnL(trades);

    setData(result);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Stock Tradebook Analyzer
        </h1>

        <CsvUploader onFileSelect={handleFile} />

        {data.length > 0 && <HoldingsTable data={data} />}
      </div>
    </main>
  );
}