import React from 'react';
var shyvana = require("images/shyvana.png")
import styles from './Card.css';

const Card = ({onClick, title}) => (
  <div className="sdf">
    <h2>Helloffdsfddfdf, {title}</h2>
    <button onClick = {onClick} type ="button">Clic mfe</button>
    <img className={styles.card} src={shyvana}></img>
  </div>
);

export default Card;