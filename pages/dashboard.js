import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { apiRequest } from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const data = await apiRequest("/tasks");
        setTasks(Array.isArray(data) ? data : []);
      } catch (err) {
        setTasks([]);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="bw-dashboard">
      <Sidebar />

      <div className="bw-main">
        <h1>Dashboard</h1>
        <p className="muted">Task overview</p>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="cards">
            <div className="card">
              <h3>Total Tasks</h3>
              <h2>{totalTasks}</h2>
            </div>

            <div className="card">
              <h3>Completed Tasks</h3>
              <h2>{completedTasks}</h2>
            </div>

            <div className="card">
              <h3>Pending Tasks</h3>
              <h2>{pendingTasks}</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
