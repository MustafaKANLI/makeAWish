import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.Wrapper}>
      <div>{props.suits}</div>
      <div>{props.values}</div>
    </div>
  );
};

export default Card;
