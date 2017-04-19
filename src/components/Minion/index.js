import React from 'react';
import styles from "./Minion.scss";
import { DragSource, DropTarget } from 'react-dnd';

export const ItemTypes = {
  MINION: 'minion',
}

const minionTarget = {
  drop(props, monitor){
      const minion = monitor.getItem();
      console.log(minion.name, "attacking ", props.name);
      //card.playCard(card.index);
  }
}
const minionSource = {
  beginDrag(props){
    return {...props}
  },

  canDrag(props, monitor){
    return true
  }
}

@DropTarget(ItemTypes.MINION, minionTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))

@DragSource(ItemTypes.MINION, minionSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))

export default class Minion extends React.Component{ 

  render(){
    const {
      name, 
      attack, 
      health, 
      mana, 
      index, 
      connectDragSource, 
      connectDropTarget
    } = this.props

    return connectDragSource(connectDropTarget(
      <li className={styles.minion}>
        <img src={require("images/champions/"+name.toLowerCase()+".png") }></img>
      </li>
    ))
  }
}