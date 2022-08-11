import React from "react";
import { createPortal } from "react-dom";
import { PopupDeleteStyled } from "./PopupDeleteStyled";

function PopupDelete() {
  return createPortal(
    <PopupDeleteStyled>
      <div>
        <h4>Are you sure you want to delete? </h4>
        <span>Yes</span>
        <span>No</span>
      </div>
    </PopupDeleteStyled>,
    document.getElementById("modalik")
  );
}

export default PopupDelete;
