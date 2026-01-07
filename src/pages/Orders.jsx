import { useEffect, useState } from "react";
import { authFetch } from "../api/http";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [form, setForm] = useState({
    stockTicker: "",
    orderType: "BUY",
    noOfShares: "",
    cost: "",
  });

  /* ===================== API CALLS ===================== */

  const loadOrders = async () => {
    const data = await authFetch("/api/orders");
    setOrders(data);
  };

  const submitOrder = async (e) => {
    e.preventDefault();

    await authFetch("/api/orders", {
      method: "POST",
      body: JSON.stringify({
        stockTicker: form.stockTicker,
        orderType: form.orderType,
        noOfShares: Number(form.noOfShares),
        cost: Number(form.cost),
      }),
    });

    setShowForm(false);
    setForm({ stockTicker: "", orderType: "BUY", noOfShares: "", cost: "" });
    loadOrders();
  };

  const deleteOrder = async (orderId) => {
    if (!window.confirm("Delete this order?")) return;
    await authFetch(`/api/orders/${orderId}`, { method: "DELETE" });
    loadOrders();
  };

  const viewDetails = async (orderId) => {
    const data = await authFetch(`/api/orders/${orderId}`);
    setSelectedOrder(data);
  };

  /* ===================== LIFECYCLE ===================== */

  useEffect(() => {
    loadOrders();
  }, []);

  /* ===================== UI ===================== */
return (
  <DashboardLayout>

    {/* FULL WIDTH WRAPPER */}
    <div className="w-full h-full flex flex-col">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Orders</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Create Order
        </button>
      </div>

      {/* ORDERS TABLE (FULL WIDTH) */}
      <div className="flex-1 w-full overflow-x-auto">

        <div className="bg-white rounded shadow w-full">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3">Stock</th>
                <th className="text-left p-3">Type</th>
                <th className="text-left p-3">Shares</th>
                <th className="text-left p-3">Cost</th>
                <th className="text-right p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.map(o => (
                <tr key={o.orderId} className="border-t">
                  <td className="p-3 font-semibold">{o.stockTicker}</td>
                  <td className="p-3">{o.orderType}</td>
                  <td className="p-3">{o.noOfShares}</td>
                  <td className="p-3">₹{o.cost}</td>
                  <td className="p-3 text-right space-x-3">
                    <button
                      onClick={() => viewDetails(o.orderId)}
                      className="text-blue-600 hover:underline"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => deleteOrder(o.orderId)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>

    {/* CREATE ORDER MODAL */}
    {showForm && (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <form
          onSubmit={submitOrder}
          className="bg-white p-6 rounded shadow w-96 space-y-4"
        >
          <h2 className="text-lg font-semibold">Create Order</h2>

          <input
            className="border p-2 rounded w-full"
            placeholder="Stock Ticker (AAPL)"
            value={form.stockTicker}
            onChange={e => setForm({ ...form, stockTicker: e.target.value })}
            required
          />

          <select
            className="border p-2 rounded w-full"
            value={form.orderType}
            onChange={e => setForm({ ...form, orderType: e.target.value })}
          >
            <option value="BUY">BUY</option>
            <option value="SELL">SELL</option>
          </select>

          <input
            className="border p-2 rounded w-full"
            type="number"
            placeholder="No of Shares"
            value={form.noOfShares}
            onChange={e => setForm({ ...form, noOfShares: e.target.value })}
            required
          />

          <input
            className="border p-2 rounded w-full"
            type="number"
            step="0.01"
            placeholder="Cost per Share"
            value={form.cost}
            onChange={e => setForm({ ...form, cost: e.target.value })}
            required
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    )}

    {/* ORDER DETAILS MODAL */}
    {selectedOrder && (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded shadow w-96 space-y-3">
          <h2 className="text-lg font-semibold">Order Details</h2>

          <p><b>Stock:</b> {selectedOrder.stockTicker}</p>
          <p><b>Type:</b> {selectedOrder.orderType}</p>
          <p><b>Shares:</b> {selectedOrder.noOfShares}</p>
          <p><b>Cost:</b> ₹{selectedOrder.cost}</p>

          <div className="text-right">
            <button
              onClick={() => setSelectedOrder(null)}
              className="px-4 py-2 border rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}

  </DashboardLayout>
);

}
