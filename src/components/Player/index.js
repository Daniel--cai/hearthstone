import React from 'react';
import styles from "./Player.scss";
import { DragSource } from 'react-dnd';
import classnames from 'classnames'
export const ItemTypes = {
  Player: 'Player'
};

const playerSource = {
  beginDrag(props){
    return {...props}
  },

  canDrag(props, monitor){
    if (props.mana > props.gem) return false
    if (props.name == 'back')
      return false;
    return true;
  }
}

@DragSource(ItemTypes.Player, playerSource, (connect,monitor)=>({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))
export default class Player extends React.Component{ 

  render(){
    var {health} = this.props
    const {connectDragSource, isDragging } = this.props
    let classNames = classnames(styles.player, isDragging ? styles['player-drag'] : '');
    return connectDragSource(
      <div className={classNames}>
  
        <div className={styles.gem}>   
          <span>{health}</span>
           <img src={require("images/card/health.png")} />
        </div>
      </div>

    )
  }
}