import React from "react";
import styles from "./Input.css";

const Input = props => {
  let inputElement = null;
  const inputStyles = [styles.InputElement];

  if (props.invalid && props.touched) {
    inputStyles.push(styles.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          onChange={props.change}
          className={inputStyles.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
    case "textarea":
      inputElement = (
        <textarea
          onChange={props.change}
          className={inputStyles.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
    default:
      inputElement = (
        <input
          onChange={props.change}
          className={inputStyles.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
