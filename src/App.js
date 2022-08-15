import { useEffect, useReducer } from "react";
import CheckboxHide from "./components/CheckboxHide";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import TaskMessage from "./components/TaskMessage/TaskMessage";
import './App.css';
import { TaskWrapper } from "./components/TaskWrapper";
import { myReducer, store } from "./state/state";

function App() {
  const [state, dispatch] = useReducer(myReducer, store);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);
  console.log(state.tasks);
  return (
    <TaskWrapper>
      
      {state.tasks.length !== 0 && <CheckboxHide state={state} dispatch={dispatch} />}
      <TaskForm dispatch={dispatch}/>
       {state.tasks.length === 0 ? <TaskMessage /> : <TaskList state ={state} dispatch={dispatch}/>}
       
    </TaskWrapper>
  )
}

export default App;
