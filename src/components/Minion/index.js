import React from 'react';
import styles from "./Minion.scss";

class Minion extends React.Component{ 
  render(){
    var {name, attack, health, mana, index} = this.props
    return (
      <div className={styles.minion}>
        <img src={require("images/"+name.toLowerCase()+".png") }></img>
      </div>
    )
  }
}
export default Minion;