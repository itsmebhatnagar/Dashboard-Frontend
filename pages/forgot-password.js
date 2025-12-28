export default function ForgotPassword() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Forgot Password</h1>
        <input placeholder="Email" />
        <button className="primary-btn">Send reset link</button>
      </div>
    </div>
  );
}
