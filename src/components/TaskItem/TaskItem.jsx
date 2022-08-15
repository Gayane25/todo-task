import React, {useState}from "react";
import {TOGGLE_COMPLETED} from "../../state/state"
import deleteIcon from "../../assets/deleteIcon.svg";
import { TaskItemStyled } from "./TaskItemStyled";
import PopupDelete from "../PopupDelete/PopupDelete";


function TaskItem({ task, dispatch }) {
  const [openModal, setOpenModal] = useState(false);


  const changeStatus =()=>{
    dispatch({type:TOGGLE_COMPLETED, id:task.id})
    console.log(task.completed)
}

  return (
    <>
      <TaskItemStyled>
        <div>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={changeStatus}
            style={{accentColor:"#008594"}}
          />
          <h4 className={task.completed ? "checked" : null}>{task.title}</h4>
        </div>

        <span onClick={()=>setOpenModal(true)}>
          <img src={deleteIcon} alt="deleteIcon" />
        </span>
      </TaskItemStyled>
     { openModal && <PopupDelete id={task.id} openModal={openModal} setOpenModal={setOpenModal} dispatch={dispatch}/>}
    </>
  );
}

export default TaskItem;
