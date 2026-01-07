import { useEffect, useState } from "react";
import { authFetch } from "../api/http";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Watchlist() {
  const [list, setList] = useState([]);
  const [ticker, setTicker] = useState("");

  const load = async () => {
    const data = await authFetch("/api/watchlist");
    setList(data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <DashboardLayout>
      <div className="w-full h-full flex flex-col">

        <h1 className="text-2xl font-bold mb-4">Watchlist</h1>

        {/* ADD TICKER */}
        <div className="mb-4 flex gap-2">
          <input
            className="border p-2 rounded w-48"
            placeholder="Ticker (AAPL)"
            value={ticker}
            onChange={e => setTicker(e.target.value)}
          />
          <button
            onClick={async () => {
              if (!ticker) return;
              await authFetch(`/api/watchlist/${ticker}`, { method: "POST" });
              setTicker("");
              load();
            }}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        {/* WATCHLIST */}
        <div className="space-y-2 w-full">
          {list.length === 0 && (
            <div className="text-gray-500">No stocks in watchlist</div>
          )}

          {list.map(item => (
            <div
              key={item.watchlistId}
              className="bg-white p-3 rounded shadow flex justify-between items-center"
            >
              <span className="font-semibold">
                {item.stockTicker}
              </span>

              <button
                className="text-red-500 hover:underline"
                onClick={async () => {
                  await authFetch(
                    `/api/watchlist/${item.stockTicker}`,
                    { method: "DELETE" }
                  );
                  load();
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

      </div>
    </DashboardLayout>
  );
}
