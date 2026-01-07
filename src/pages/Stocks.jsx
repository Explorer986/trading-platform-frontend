
import { useState } from "react";
import { authFetch } from "../api/http";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Stocks() {
  const [ticker, setTicker] = useState("");
  const [data, setData] = useState(null);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Stock Lookup</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 rounded"
          placeholder="AAPL"
          onChange={e => setTicker(e.target.value)}
        />
        <button
          onClick={async () => setData(await authFetch(`/stocks/${ticker}`))}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Fetch
        </button>
      </div>
      {data && (
        <pre className="bg-white p-4 rounded shadow">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </DashboardLayout>
  );
}
