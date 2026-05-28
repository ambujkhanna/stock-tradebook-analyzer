import "./globals.css";

export const metadata = {
  title: "Stock Tradebook Analyzer",
  description: "Real P&L analyzer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}