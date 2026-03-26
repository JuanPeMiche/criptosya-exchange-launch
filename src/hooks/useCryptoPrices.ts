import { useEffect, useState } from "react";

interface CryptoPrice {
  symbol: string;
  price: string;
  change: string;
}

const COIN_IDS = ["bitcoin", "ethereum", "tether", "binancecoin", "solana"];
const SYMBOLS: Record<string, string> = {
  bitcoin: "BTC",
  ethereum: "ETH",
  tether: "USDT",
  binancecoin: "BNB",
  solana: "SOL",
};

const fallbackData: CryptoPrice[] = [
  { symbol: "BTC", price: "$104,250", change: "+2.4%" },
  { symbol: "ETH", price: "$3,890", change: "+1.8%" },
  { symbol: "USDT", price: "$1.00", change: "0.0%" },
  { symbol: "BNB", price: "$715", change: "+3.1%" },
  { symbol: "SOL", price: "$248", change: "+5.2%" },
];

const formatPrice = (price: number) => {
  if (price >= 1000) return `$${price.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  if (price >= 1) return `$${price.toFixed(2)}`;
  return `$${price.toFixed(4)}`;
};

const formatChange = (change: number) => {
  const sign = change >= 0 ? "+" : "";
  return `${sign}${change.toFixed(1)}%`;
};

export function useCryptoPrices() {
  const [prices, setPrices] = useState<CryptoPrice[]>(fallbackData);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${COIN_IDS.join(",")}&vs_currencies=usd&include_24hr_change=true`
        );
        if (!res.ok) return;
        const data = await res.json();
        const updated = COIN_IDS.map((id) => ({
          symbol: SYMBOLS[id],
          price: formatPrice(data[id]?.usd ?? 0),
          change: formatChange(data[id]?.usd_24h_change ?? 0),
        }));
        setPrices(updated);
      } catch {
        setPrices(fallbackData);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60_000);
    return () => clearInterval(interval);
  }, []);

  return prices;
}
