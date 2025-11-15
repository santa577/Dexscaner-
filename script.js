// Load DexScreener API
async function loadPairs() {
  const url = "https://api.dexscreener.com/latest/dex/pairs/bsc";
  const res = await fetch(url);
  const data = await res.json();

  const box = document.getElementById("pairs");
  box.innerHTML = "";

  data.pairs.slice(0, 20).forEach((p) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${p.baseToken.symbol}/${p.quoteToken.symbol}</h3>
      Price: $${p.priceUsd} <br>
      Liquidity: $${p.liquidity.usd} <br>
      Volume 24h: $${p.volume.h24}
    `;

    box.appendChild(div);
  });
}

loadPairs();

// TradingView Chart
new TradingView.widget({
  width: "100%",
  height: 500,
  symbol: "BINANCE:BTCUSDT",
  interval: "60",
  timezone: "Etc/UTC",
  theme: "dark",
  style: "1",
  container_id: "tvchart"
});