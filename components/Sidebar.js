import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>

      <nav className="sidebar-nav">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/tasks">Tasks</Link>
        <Link href="/analytics">Analytics</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </div>
  );
}
