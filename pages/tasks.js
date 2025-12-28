import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { apiRequest } from "../services/api";

export default function Tasks() {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selected, setSelected] = useState(null);

  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

  async function createTask() {
    await apiRequest("/tasks", "POST", {
      title,
      deadline,
    });
    setShowModal(false);
    setTitle("");
    setDeadline("");
  }

  async function completeTask(id) {
    await apiRequest(`/tasks/${id}`, "PUT");
  }

  async function deleteTask(id) {
    await apiRequest(`/tasks/${id}`, "DELETE");
    setSelected(null);
  }

  return (
    <div className="bw-dashboard">
      <Sidebar />

      <div className="bw-main">
        <h1>Tasks</h1>

        {/* ADD TASK BUTTON */}
        <div className="center">
          <button className="primary-btn" onClick={() => setShowModal(true)}>
            + Add Task
          </button>
        </div>

        {/* TASK LIST */}
        <div className="task-list">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="task-card"
              onClick={() => setSelected(task)}
            >
              <h3>{task.title}</h3>
              <p>Deadline: {task.deadline}</p>
            </div>
          ))}
        </div>

        {/* ADD TASK MODAL */}
        {showModal && (
          <div className="modal">
            <div className="modal-box">
              <h2>Create Task</h2>

              <input
                placeholder="Task name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />

              <button className="primary-btn" onClick={createTask}>
                Create
              </button>

              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        )}

        {/* TASK DETAIL VIEW */}
        {selected && (
          <div className="modal">
            <div className="modal-box">
              <h2>{selected.title}</h2>
              <p>Created: {selected.created_at}</p>
              <p>Deadline: {selected.deadline}</p>

              <button
                className="primary-btn"
                onClick={() => completeTask(selected.id)}
              >
                Mark Completed
              </button>

              <button onClick={() => deleteTask(selected.id)}>
                Delete Task
              </button>

              <button onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
