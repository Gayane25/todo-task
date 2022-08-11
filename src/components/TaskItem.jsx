import React from 'react';
import deleteIcon from "../assets/deleteIcon.svg";
import { TaskItemStyled } from './TaskItemStyled';

function TaskItem() {
  return (
    <TaskItemStyled>
        <div>
        <input type="checkbox"/>
        <h4>some title is here </h4>
        </div>
       
        <span><img src={deleteIcon} alt ="deleteIcon"/></span>
        
    </TaskItemStyled>
  )
}

export default TaskItem