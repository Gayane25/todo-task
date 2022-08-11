import React from "react";
import { TaskFormStyled } from "./TaskFormStyled";
import deleteIcon from "../assets/deleteIcon.svg";
function TaskForm() {
  return (
    <TaskFormStyled>
      <h4>Task</h4>
      <form>
        <div>
          <input type="text" placeholder="write here" />
          <span>
            <img src={deleteIcon} alt="delete-icon" />
          </span>
        </div>

        <button>Add</button>
      </form>
    </TaskFormStyled>
  );
}

export default TaskForm;
