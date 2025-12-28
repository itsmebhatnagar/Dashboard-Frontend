import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function Settings() {
  const [name, setName] = useState("");

  return (
    <div className="bw-dashboard">
      <Sidebar />

      <div className="bw-main">
        <h1>Settings</h1>

        {/* YOUTUBE */}
        <div className="panel">
          <h2>YouTube Integration</h2>
          <a
            href="http://localhost:5000/youtube/connect"
            className="primary-btn small-btn"
          >
            Connect YouTube
          </a>
        </div>

        {/* CHANGE NAME */}
        <div className="panel">
          <h2>Change Name</h2>
          <input
            placeholder="New name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="primary-btn">Save</button>
        </div>

        {/* CHANGE CREDENTIALS */}
        <div className="panel">
          <h2>Change Credentials</h2>
          <p className="muted">
            OTP will be sent to your email
          </p>
          <button className="primary-btn">Request OTP</button>
        </div>
      </div>
    </div>
  );
}
