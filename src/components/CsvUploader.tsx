"use client";

import { ChangeEvent } from "react";

interface Props {
  onFileSelect: (file: File) => void;
}

export default function CsvUploader({ onFileSelect }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="border rounded-2xl p-8 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-4">
        Upload Tradebook CSV
      </h2>

      <input
        type="file"
        accept=".csv"
        onChange={handleChange}
        className="border p-3 rounded-lg w-full"
      />
    </div>
  );
}