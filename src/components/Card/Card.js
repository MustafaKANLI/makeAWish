import React from "react";
import classes from "./Card.module.css";
import Club from "../../img/club.svg";
import Heart from "../../img/heart.svg";
import Diamond from "../../img/diamond.svg";
import Spade from "../../img/spade.svg";

const Card = (props) => {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.valueTop}>{props.values}</div>
      <div className={classes.suit}>
        {props.suits === "clubs" && (
          <img src={Club} alt="club" className={classes.img} />
        )}
        {props.suits === "hearts" && (
          <img src={Heart} alt="heart" className={classes.img} />
        )}
        {props.suits === "diamonds" && (
          <img src={Diamond} alt="diamond" className={classes.img} />
        )}
        {props.suits === "spades" && (
          <img src={Spade} alt="spade" className={classes.img} />
        )}
      </div>
      <div className={classes.valueBottom}>{props.values}</div>
    </div>
  );
};

export default Card;
