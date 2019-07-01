import React from "react";
import burguerLogo from "../../assets/images/burger-logo.png";
import styles from "./Logo.css";

const logo = props => {
  return (
    <div className={styles.Logo} style={{ height: props.height }}>
      <img src={burguerLogo} alt="Burger Logo" />
    </div>
  );
};

export default logo;
