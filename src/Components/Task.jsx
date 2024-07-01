import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faEdit,
  faTrashAlt,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { updateTask, deleteTask, toggleTaskCompletion } from "../actions";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    dispatch(updateTask({ ...task, name, description }));
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="submit">
            <FontAwesomeIcon icon={faCheckCircle} /> Enregistrer
          </button>
        </form>
      ) : (
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => dispatch(toggleTaskCompletion(task.id))}>
            <FontAwesomeIcon
              icon={task.completed ? faTimesCircle : faCheckCircle}
            />
            {task.completed ? "Non validé" : "Validé"}
          </button>
          <button onClick={() => setIsEditing(true)}>
            <FontAwesomeIcon icon={faEdit} /> Modifier
          </button>
          <button
            className="delete"
            onClick={() => dispatch(deleteTask(task.id))}
          >
            <FontAwesomeIcon icon={faTrashAlt} /> Supprimer
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
