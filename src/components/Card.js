import React from 'react';
var shyvana = require("images/Shyvana.png");
var caitlyn = require("images/caitlyn.png")
import styles from "./Card.scss";

const Card = ({name, attack, health, mana}) => (
  <div className={styles.card} >
    <span className="name">{name}-{attack}/{health}</span>
    <img src={require("images/"+name.toLowerCase()+".png")}></img>
  </div>
);

export default Card;

//    <button onClick = {onClick} type ="button">Clic mfe</button>