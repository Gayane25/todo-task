import React from "react";
import { PopupDeleteStyled } from "./PopupDeleteStyled";
import { DELETE_TASK } from "../../state";
import { createPortal } from "react-dom";
function PopupDelete({ id, setOpenModal, dispatch }) {
  const deleteTask = () => {
    dispatch({ type: DELETE_TASK, id: id });
  };

  return createPortal(
    <PopupDeleteStyled>
      <div>
        <h4>Are you sure you want to delete? </h4>
        <span onClick={deleteTask}>Yes</span>
        <span onClick={() => setOpenModal(false)}>No</span>
      </div>
    </PopupDeleteStyled>,
    document.getElementById("modalik")
  );
}

export default PopupDelete;
