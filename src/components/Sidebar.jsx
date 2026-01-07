
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/orders", label: "Orders" },
  { to: "/watchlist", label: "Watchlist" },
  { to: "/stocks", label: "Stocks" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-5">
      <h1 className="text-xl font-bold mb-6">TradePro</h1>
      <nav className="space-y-2">
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${
                isActive ? "bg-slate-700" : "hover:bg-slate-800"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
