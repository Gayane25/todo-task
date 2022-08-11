import React from "react";
import { Checkbox } from "./CheckboxHideStyled";

function CheckboxHide() {
  return (
    <Checkbox>
      <label>
        <input type="checkbox" /> Hide Completed
      </label>
    </Checkbox>
  );
}

export default CheckboxHide;
