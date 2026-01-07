
import { useState } from "react";
import { login } from "../auth/authService";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await login(username, password);
      window.location.href = "/";
    } catch {
      setErr("Invalid credentials");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={submit}
        className="bg-white p-8 rounded-lg shadow w-96 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>
        {err && <p className="text-red-500 text-sm">{err}</p>}
        <input
          className="w-full border p-2 rounded"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="w-full border p-2 rounded"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
