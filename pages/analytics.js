import Sidebar from "../components/Sidebar";

export default function Analytics() {
  const youtubeConnected = false; // backend flag later

  return (
    <div className="bw-dashboard">
      <Sidebar />

      <div className="bw-main center">
        {!youtubeConnected ? (
          <>
            <h1>NO ANALYSIS</h1>
            <p className="muted">Connect YouTube first</p>

            <a
              href="http://localhost:5000/youtube/connect"
              className="primary-btn"
            >
              Connect YouTube
            </a>
          </>
        ) : (
          <>
            <h1>YouTube Analytics</h1>
            <p>Real analytics will show here</p>
          </>
        )}
      </div>
    </div>
  );
}
