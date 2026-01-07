
import { authFetch } from "../api/http";

export const login = async (username, password) => {
  console.log("Logging in user:", username);

  const res = await authFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  localStorage.setItem("token", res.token);
  console.log("Logged in user:", res.user);
  console.log("Logged in user:", res.token);
  return res;
};

export const register = (username, email, password) =>
  authFetch("/auth/register", {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
  });

export const logout = () => localStorage.removeItem("token");
