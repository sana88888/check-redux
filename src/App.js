import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import "./styles.css";

const App = () => (
  <Provider store={store}>
    <div className="app">
      <h1>Liste de tâches</h1>
      <AddTask />
      <TaskList />
    </div>
  </Provider>
);

export default App;
