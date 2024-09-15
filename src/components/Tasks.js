import React, { useState, useEffect } from "react";
import "../styles/Tasks.css";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
  });

  useEffect(() => {
    // Fetch tasks from an API or load from local storage
    // For now, we'll use some dummy data
    const dummyTasks = [
      {
        id: 1,
        title: "Call client",
        description: "Follow up on proposal",
        dueDate: "2023-06-15",
        priority: "High",
        completed: false,
      },
      {
        id: 2,
        title: "Prepare presentation",
        description: "Create slides for team meeting",
        dueDate: "2023-06-20",
        priority: "Medium",
        completed: false,
      },
    ];
    setTasks(dummyTasks);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.title) {
      setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
      setNewTask({
        title: "",
        description: "",
        dueDate: "",
        priority: "Medium",
      });
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="tasks-container">
      <h1>Tasks</h1>

      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleInputChange}
          placeholder="Task title"
          required
        />
        <input
          type="text"
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          type="date"
          name="dueDate"
          value={newTask.dueDate}
          onChange={handleInputChange}
        />
        <select
          name="priority"
          value={newTask.priority}
          onChange={handleInputChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      <div className="tasks-list">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
            <button onClick={() => handleToggleComplete(task.id)}>
              {task.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            <button
              onClick={() => {
                const updatedTask = prompt("Edit task", JSON.stringify(task));
                if (updatedTask) {
                  handleEditTask(task.id, JSON.parse(updatedTask));
                }
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
