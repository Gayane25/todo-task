import CheckboxHide from "./components/CheckboxHide";
import PopupDelete from "./components/PopupDelete";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskMessage from "./components/TaskMessage";
import { TodoWrapper} from "./components/TodoStyled";

function App() {
  return (
    <TodoWrapper>
      <CheckboxHide/>
      <TaskForm/>
      {/* <TaskMessage/> */}
      <TaskList />
      {/* <PopupDelete/> */}
    </TodoWrapper>
  );
}

export default App;
