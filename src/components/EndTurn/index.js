import React from 'react';
import styles from "./EndTurn.scss";


const Card = ({onClick}) => (
  <button className={styles.btn} onClick={onClick} >Draw Card</button>
);

export default Card;

//    <button onClick = {onClick} type ="button">Clic mfe</button>