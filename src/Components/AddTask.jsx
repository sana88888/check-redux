import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions";

const AddTask = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    dispatch(addTask({ id: Date.now(), name, description, completed: false }));
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description de la tâche"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Ajouter la tâche</button>
    </form>
  );
};

export default AddTask;
