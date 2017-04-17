import React from 'react';
import styles from "./Card.scss";
import { DragSource } from 'react-dnd';

export const ItemTypes = {
  CARD: 'card'
};


const cardSource = {
  beginDrag(props){
    return props
  },

  canDrag(props, monitor){
    return false
  }
}

function collect(connect, monitor){
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Card extends React.Component{ 
  render(){
    var {name, attack, health, mana, index} = this.props
    const {connectDragSource, isDragging } = this.props
    return connectDragSource(
      <span className={styles.card}>
        <img  src={require("images/champions/"+name.toLowerCase()+".png") }/>
      </span>

    )
  }
}
export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);

//    <button onClick = {onClick} type ="button">Clic mfe</button>