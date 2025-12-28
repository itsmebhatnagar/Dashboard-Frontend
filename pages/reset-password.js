import { useRouter } from "next/router";
import { useState } from "react";

export default function ResetPassword() {
  const router = useRouter();
  const [password, setPassword] = useState("");

  async function reset() {
    await fetch("http://localhost:5000/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: router.query.token, password }),
    });
    router.push("/login");
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Reset Password</h1>
        <input type="password" placeholder="New password" onChange={e => setPassword(e.target.value)} />
        <button className="primary-btn" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
