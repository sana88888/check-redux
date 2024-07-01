import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskItem from "./TaskItem";
import {
  updateTask,
  deleteTask,
  toggleTaskCompletion,
  setFilter,
} from "../actions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter("all"))}>
          Toutes les tâches
        </button>
        <button onClick={() => dispatch(setFilter("active"))}>
          Tâches actives
        </button>
        <button onClick={() => dispatch(setFilter("completed"))}>
          Tâches terminées
        </button>
      </div>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={(updatedTask) => dispatch(updateTask(updatedTask))}
          deleteTask={(taskId) => dispatch(deleteTask(taskId))}
          toggleTaskCompletion={(taskId) =>
            dispatch(toggleTaskCompletion(taskId))
          }
        />
      ))}
    </div>
  );
};

export default TaskList;
