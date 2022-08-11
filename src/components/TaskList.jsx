import React from "react";
import TaskItem from "./TaskItem";
import { TaskListStyled } from "./TaskListStyled";

function TaskList() {
  return (
    <TaskListStyled>
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </TaskListStyled>
  );
}

export default TaskList;
