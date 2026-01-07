import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-6">
      
      <div className="font-semibold text-lg">
        Trading Platform
      </div>

      <div className="flex gap-4 items-center">
        {!token && (
          <>
            <button
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:underline"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Register
            </button>
          </>
        )}

        {token && (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
            className="text-red-600 hover:underline"
          >
            Logout
          </button>
        )}
      </div>

    </header>
  );
}
