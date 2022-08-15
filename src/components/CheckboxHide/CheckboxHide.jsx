import React from "react";
import { Checkbox } from "./CheckboxHideStyled";
import { SHOW_COMPLETED } from "../../state";

function CheckboxHide({ state, dispatch }) {
  return (
    <Checkbox>
      <input
        type="checkbox"
        checked={state.hiddedCompleted}
        onChange={() => dispatch({ type: SHOW_COMPLETED })}
        style={{ accentColor: "#008594", width: 24 + "px" }}
      />
      <label>Hide Completed</label>
    </Checkbox>
  );
}

export default CheckboxHide;
