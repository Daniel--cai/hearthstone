import React from 'react';
import styles from "./Minion.scss";
import { DragSource, DropTarget } from 'react-dnd';
import classnames from 'classnames'
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
      connectDropTarget,
      isDragging,
    } = this.props
    
    const opacity = {opacity : isDragging ? 0 : 1};
    const cursor = isDragging ? 'crosshair' : 'default';
    let classNames = classnames(styles.minion, isDragging ? styles['minion-drag'] : '')
    return connectDragSource(connectDropTarget(
      <li className={classNames}>
        <img src={require("images/champions/"+name.toLowerCase()+".png") }/>
      </li>
    ))
  }
}