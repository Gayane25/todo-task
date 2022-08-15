import React, { useState } from "react";
import { ADD_TASK } from "../../state/state";
import { TaskFormStyled } from "./TaskFormStyled";
import deleteIcon from "../../assets/deleteIcon.svg";

function TaskForm({ dispatch }) {
  const [value, setValue] = useState("");
  const [valid, setValid]=useState(true);

  const handleInputOnChange =(e)=>{
      if(e.target.value.length > 54){
        setValid(false);
        setValue(e.target.value);
        
      } 
      else{
        setValid(true);
        setValue(e.target.value);
      }
  }
 

  const handleSubmit = (e) => {
    if(valid && value.length !==0){
      e.preventDefault();
      dispatch({ type: ADD_TASK, title: value });
      setValue("");
    } else {
      
    }
    
  };
  return (
    <TaskFormStyled>
      <h4>Task</h4>
      <form onSubmit={handleSubmit} >
        <div className="input-div">
          <input 
            type="text"
            placeholder="write here"
            className={!valid ? "notValid" : null}
            value={value}
            onChange={handleInputOnChange}
            maxLength="55"
          />
          <span onClick={()=>setValue("")}>
            <img src={deleteIcon} alt="delete-icon" />
          </span>
          {!valid && <p style= {{
      color:"#FF3104",
      fontSize: 12 + "px",
      fontWeight: 400
    }}>Task content can contain max 54 characters.</p>}
        </div>
       <button>Add</button>
        
      </form>
      
    
      
    </TaskFormStyled>
  );
}

export default TaskForm;
