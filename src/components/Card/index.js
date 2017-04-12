import React from 'react';
import styles from "./Card.scss";

class Card extends React.Component{ 
  render(){
    var {name, attack, health, mana} = this.props
    return (
      <div className={styles.card} >
        <img src={require("images/"+name.toLowerCase()+".png") }></img>
      </div>
    )
  }
}
export default Card;

//    <button onClick = {onClick} type ="button">Clic mfe</button>