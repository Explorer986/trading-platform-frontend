
import { logout } from "../auth/authService";

export default function Topbar() {
  return (
    <header className="h-14 bg-white border-b flex items-center justify-end px-6">
      <button
        onClick={() => {
          logout();
          window.location.href = "/login";
        }}
        className="text-sm font-semibold text-red-600"
      >
        Logout
      </button>
    </header>
  );
}
