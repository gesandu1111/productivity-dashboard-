import React, { useState, useEffect } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    const task = e.target.task.value.trim();
    if (!task) return;

    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    e.target.task.value = '';
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <form onSubmit={addTask}>
        <input name="task" placeholder="Add new task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => deleteTask(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
