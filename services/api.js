const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiRequest(path, method="GET", body) {
  const token = localStorage.getItem("token");

  const res = await fetch(API + path, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` })
    },
    body: body ? JSON.stringify(body) : undefined
  });

  return res.json();
}
