export const ADD_TASK = "ADD_TASK";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const DELETE_TASK = "DELETE_TASK ";
export const HIDE_COMPLETED = "HIDE_COMPLETED";
export const SHOW_COMPLETED = "SHOW_COMPLETED";

export const store = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  hiddedCompleted: false,
};

export function myReducer(state = store, action) {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Math.random(), title: action.title, completed: false },
        ],
      };
    }
    case TOGGLE_COMPLETED: {
      let result = state.tasks.map((task) => {
        if (task.id === action.id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      return {
        ...state,
        tasks: result,
      };
    }
    case DELETE_TASK: {
      let result = state.tasks.filter((task) => task.id !== action.id);
      return { ...state, tasks: result };
    }
    case SHOW_COMPLETED: {
      return { ...state, hiddedCompleted: !state.hiddedCompleted };
    }
    case HIDE_COMPLETED: {
      let result = state.tasks.filter((task) => task.completed === false);
      if (state.hiddedCompleted) {
        return { ...state, tasks: result };
      } else {
        return state;
      }
    }

    default: {
      return state;
    }
  }
}
