
const API_BASE = "http://localhost:8080";

export async function authFetch(url, options = {}) {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(API_BASE + url, { ...options, headers });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
