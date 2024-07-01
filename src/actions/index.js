let nextTaskId = 0;

export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: { ...task, id: nextTaskId++, completed: false },
});

export const updateTask = (task) => ({
  type: "UPDATE_TASK",
  payload: task,
});

export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  payload: id,
});

export const toggleTaskCompletion = (id) => ({
  type: "TOGGLE_TASK_COMPLETION",
  payload: id,
});

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});
