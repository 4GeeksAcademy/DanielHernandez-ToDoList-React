import React from "react";
import { useState } from "react";


const TodoApp = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && task.trim() !== "") {
            setTasks([...tasks, task.trim()]);
            setTask("");
        }
    };

    const deleteTask = (indexToRemove) => {
        setTasks(tasks.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="todo-container">
            <h1 className="title">To Do</h1>

            <div className="todo-box shadow">
                <input
                    type="text"
                    className="todo-input"
                    placeholder="What needs to be done?"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <ul className="task-list">
                    {tasks.length === 0 ? (
                        <li className="empty-msg">No tasks, add some</li>
                    ) : (
                        tasks.map((t, index) =>
                        (
                            <li key={index} className="task-item d-flex justify-content-between align-items-center">
                                <span>{t}</span>
                                <span className="delete-btn" onClick={() => deleteTask(index)}>❌</span>
                            </li>
                        ))
                    )}
                </ul>

                <div className="task-count">
                    {tasks.length} item{tasks.length !== 1 ? "s" : ""} left
                </div>
            </div>
        </div>
    );
}

export default TodoApp;
