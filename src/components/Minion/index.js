import React from 'react';
import styles from "./Minion.scss";

export default class Minion extends React.Component{ 
  render(){
    var {name, attack, health, mana, index} = this.props
    return (
      <li className={styles.minion}>
        <img src={require("images/champions/"+name.toLowerCase()+".png") }></img>
      </li>
    )
  }
}