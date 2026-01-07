import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-6">Trading App</h2>

      <nav className="space-y-3">
        <Link to="/orders" className="block hover:text-blue-400">
          Orders
        </Link>
        <Link to="/portfolio" className="block hover:text-blue-400">
          Portfolio
        </Link>
        <Link to="/stocks" className="block hover:text-blue-400">
          Stocks
        </Link>
      </nav>
    </aside>
  );
}
