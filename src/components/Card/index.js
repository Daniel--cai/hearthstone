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
    if (props.name == 'back')
      return false;
    return true;
  }
}

@DragSource(ItemTypes.CARD, cardSource, (connect,monitor)=>({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))
export default class Card extends React.Component{ 

  render(){
    var {name, attack, health, mana} = this.props
    const {connectDragSource, isDragging } = this.props
    let classNames = classnames(styles.card, isDragging ? styles['card-drag'] : '');
    return connectDragSource(
      <div className={classNames}>
        <img className={styles.bg }src={require("images/champions/"+name.toLowerCase()+".png") }/>
        <div className={styles.attack}>
         
        <img src={require("images/card/attack.png")} />
        </div>
      </div>

    )
  }
}