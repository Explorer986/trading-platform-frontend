import { useEffect, useState } from "react";
import { authFetch } from "../api/http";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Portfolio() {
  const [data, setData] = useState([]);

  useEffect(() => {
    authFetch("/api/portfolio").then(setData);
  }, []);

  return (
    <DashboardLayout>
      <div className="w-full h-full flex flex-col">

        <h1 className="text-2xl font-bold mb-4">Portfolio</h1>

        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-3 text-left">Stock</th>
              <th className="p-3 text-center">Quantity</th>
              <th className="p-3 text-center">Price</th>
              <th className="p-3 text-center">Total Value</th>
            </tr>
          </thead>

          <tbody>
            {data.map((p) => {
              const totalValue = p.noOfShares * p.price;

              return (
                <tr key={p.stockTicker} className="border-b">
                  <td className="p-3">
                    <div className="font-medium">{p.stockName}</div>
                    <div className="text-sm text-gray-500">{p.stockTicker}</div>
                  </td>

                  <td className="p-3 text-center">
                    {p.noOfShares}
                  </td>

                  <td className="p-3 text-center">
                    ₹{p.price.toFixed(2)}
                  </td>

                  <td className="p-3 text-center font-semibold text-green-600">
                    ₹{totalValue.toFixed(2)}
                  </td>
                </tr>
              );
            })}

            {data.length === 0 && (
              <tr>
                <td colSpan="4" className="p-6 text-center text-gray-500">
                  No stocks in portfolio
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </DashboardLayout>
  );
}
