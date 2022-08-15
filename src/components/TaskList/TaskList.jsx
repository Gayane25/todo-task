import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import { TaskListStyled } from "./TaskListStyled";

function TaskList({state, dispatch}) {
  const tasks= state.hiddedCompleted ? state.tasks.filter((task) => !task.completed): state.tasks
  return (
    <TaskListStyled>
      { tasks.map(task=> 
        <TaskItem key={task.id} task={task} dispatch={dispatch}/>
      )}
    </TaskListStyled>
  );
}

export default TaskList;
