import React from "react";
import styles from "./Button.css";

const button = props => {
  return (
    <button
      disabled={props.disabled}
      className={[[styles.Button], styles[props.btnType]].join(" ")}
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};

export default button;
