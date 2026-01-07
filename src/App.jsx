
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Orders from "./pages/Orders";
import Watchlist from "./pages/Watchlist";
import Stocks from "./pages/Stocks";
import Resgister from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/register" element={<Resgister />} />
      </Routes>
    </BrowserRouter>
  );
}
