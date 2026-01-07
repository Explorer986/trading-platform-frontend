import { useEffect, useState } from "react";
import { authFetch } from "../api/http";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Dashboard() {
  const [portfolio, setPortfolio] = useState([]);
  const [orders, setOrders] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Load portfolio
    authFetch("/api/portfolio")
      .then(setPortfolio)
      .catch(() => setPortfolio([]));

    // Load orders
    authFetch("/api/orders")
      .then(setOrders)
      .catch(() => setOrders([]));

    // Load user balance (agar API hai)
    authFetch("/api/users/me")
      .then((res) => setBalance(res.balance))
      .catch(() => setBalance(0));
  }, []);

  // 📊 Calculations
  const holdingsCount = portfolio.length;
  const ordersCount = orders.length;

  const totalPortfolioValue = portfolio.reduce(
    (sum, p) => sum + p.noOfShares * p.price,
    0
  );

  return (
    <DashboardLayout>
      <div className="w-full h-full">

        {/* PAGE TITLE */}
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* BALANCE */}
          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-500">Balance</p>
            <h2 className="text-2xl font-bold text-green-600">
              ₹{balance.toFixed(2)}
            </h2>
          </div>

          {/* HOLDINGS */}
          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-500">Holdings</p>
            <h2 className="text-2xl font-bold">
              {holdingsCount} Stocks
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Value: ₹{totalPortfolioValue.toFixed(2)}
            </p>
          </div>

          {/* ORDERS */}
          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-500">Orders</p>
            <h2 className="text-2xl font-bold">
              {ordersCount}
            </h2>
          </div>

        </div>

        {/* RECENT HOLDINGS TABLE */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Your Holdings</h2>

          {portfolio.length === 0 ? (
            <p className="text-gray-500">No holdings yet</p>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="p-2">Stock</th>
                  <th className="p-2">Shares</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Value</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.map((p) => (
                  <tr key={p.portfolioId} className="border-b">
                    <td className="p-2 font-medium">
                      {p.stockName} ({p.stockTicker})
                    </td>
                    <td className="p-2">{p.noOfShares}</td>
                    <td className="p-2">₹{p.price}</td>
                    <td className="p-2">
                      ₹{(p.noOfShares * p.price).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </DashboardLayout>
  );
}
