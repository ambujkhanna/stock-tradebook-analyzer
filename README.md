# Stock Tradebook Analyzer

A smart portfolio analytics application that shows the **real profit/loss position** of an investor instead of the misleading average price shown by most brokers.

Live App: https://stock-tradebook-analyzer.vercel.app/
GitHub Repository: https://github.com/ambujkhanna/stock-tradebook-analyzer

---

# Problem Statement

Most stock brokers only show:

* Current average buying price
* Current unrealized profit/loss

This creates a misleading picture for investors who:

* Book losses for tax harvesting
* Sell and rebuy shares
* Average down positions
* Frequently swing trade
* Re-enter stocks after exits

As a result, investors often think they are in profit while they are still running in an overall loss.

---

# Example of the Problem

## Scenario

### Step 1

Buy 1 share of ABC at ₹100

### Step 2

Sell 1 share at ₹60

Booked Loss:

```text
₹40 loss
```

### Step 3

Buy again at ₹65

### Step 4

Current Market Price becomes ₹75

---

# What Most Brokers Show

| Avg Price | Current Price | Profit |
| --------- | ------------- | ------ |
| ₹65       | ₹75           | +₹10   |

This looks profitable.

---

# Actual Reality

Previous booked loss:

```text
-₹40
```

Current unrealized gain:

```text
+₹10
```

Actual net position:

```text
-₹30
```

The investor is still overall in loss.

---

# Objective of This Project

This application calculates the:

* Realized Profit/Loss
* Unrealized Profit/Loss
* True Net Position
* Actual Break-even Price

so investors can understand their true financial position.

---

# Key Features

## CSV Tradebook Upload

Upload stock tradebook CSV files from brokers.

---

## Realized P&L Tracking

Tracks actual booked profits and losses from completed transactions.

---

## Unrealized P&L

Shows current profit/loss on active holdings.

---

## True Net Position

Combines realized and unrealized P&L to show actual portfolio status.

---

## True Break-even Price

Calculates the real break-even price considering historical losses and profits.

---

## Portfolio Dashboard

Displays all holdings in a clean tabular dashboard.

---

# Example Calculations

## Example 1 — Loss Recovery

### Transactions

| Type | Qty | Price |
| ---- | --- | ----- |
| BUY  | 10  | ₹100  |
| SELL | 10  | ₹60   |
| BUY  | 10  | ₹65   |

Current Market Price:

```text
₹75
```

---

## Broker View

| Avg Price | Current Price | Profit     |
| --------- | ------------- | ---------- |
| ₹65       | ₹75           | +₹10/share |

Broker suggests:

```text
₹100 profit
```

---

## Actual View

### Booked Loss

```text
(60 - 100) × 10 = -₹400
```

### Current Unrealized Profit

```text
(75 - 65) × 10 = +₹100
```

### Actual Net Position

```text
-₹400 + ₹100 = -₹300
```

---

# True Break-even Price

Formula:

```text
(Current Investment - Realized P&L) / Current Quantity
```

Calculation:

```text
(650 - (-400)) / 10
= 105
```

Actual recovery price:

```text
₹105/share
```

Not ₹65.

---

# Why This Matters

This project is especially useful for:

* Tax harvesting
* Swing traders
* Long-term investors
* Portfolio recovery analysis
* Averaging strategies
* Emotional investment tracking

---

# Tech Stack

| Layer       | Technology   |
| ----------- | ------------ |
| Frontend    | Next.js      |
| Language    | TypeScript   |
| Styling     | Tailwind CSS |
| CSV Parsing | PapaParse    |
| Charts      | Recharts     |
| Deployment  | Vercel       |

---

# Project Structure

```text
src/
 ├── app/
 ├── components/
 ├── engine/
 ├── types/
 └── utils/
```

---

# Core Engine

The heart of the application is the reusable P&L engine:

```text
calculatePnL(trades)
```

This engine:

* groups transactions
* calculates realized P&L
* calculates unrealized P&L
* computes true break-even price
* returns actual net portfolio status

---

# Current Features

* CSV Upload
* Trade Parsing
* Portfolio Summary
* Net P&L Calculation
* True Break-even Analysis
* Simple Dashboard

---

# Future Roadmap

## Phase 2

* Real-time stock prices
* Multi-broker support
* Zerodha integration
* Groww CSV support
* Portfolio charts
* Historical analytics
* Tax harvesting insights
* Authentication
* Database support
* Mobile responsive UI

---

# Installation

## Clone Repository

```bash
git clone https://github.com/ambujkhanna/stock-tradebook-analyzer.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Locally

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# Deployment

The application is deployed on Vercel:

https://stock-tradebook-analyzer.vercel.app/

---

# Sample CSV Format

```csv
symbol,type,quantity,price,date
RELIANCE,BUY,10,2500,2025-01-01
RELIANCE,SELL,10,2300,2025-01-05
RELIANCE,BUY,10,2400,2025-02-01
TCS,BUY,5,3900,2025-01-10
```

---

# Vision

The goal of this project is to help investors understand the true picture of their investments rather than relying on misleading broker averages.

This project focuses on:

* transparency
* accurate recovery analysis
* realistic profit/loss tracking
* investor awareness

---

# Author

Ambuj Khanna

GitHub:
https://github.com/ambujkhanna
