import React from 'react';
import styles from "./Card.scss";
import { DragSource } from 'react-dnd';
import classnames from 'classnames'
export const ItemTypes = {
  CARD: 'card'
};

const cardSource = {
  beginDrag(props){
    return {...props}
  },

  canDrag(props, monitor){
    return true
  }
}

function collect(connect, monitor){
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

@DragSource(ItemTypes.CARD, cardSource, collect)
export default class Card extends React.Component{ 
  render(){
    var {name, attack, health, mana} = this.props
    const {connectDragSource, isDragging } = this.props
    let classNames = classnames(styles.card, isDragging ? styles['card-drag'] : '');
    return connectDragSource(
      <span className={classNames}>
        <img  src={require("images/champions/"+name.toLowerCase()+".png") }/>
      </span>

    )
  }
}