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
      minion.attackMinion(props);
  },
  canDrop(props, monitor){

    return (props.id != monitor.getItem().id)
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

@DropTarget(ItemTypes.MINION, minionTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))

@DragSource(ItemTypes.MINION, minionSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))

export default class Minion extends React.Component{ 

  render(){
    const {
      name, attack, health,mana, index, 
      connectDragSource, connectDropTarget,
      isDragging, canDrop, isOver,
    } = this.props
    
    let classNames = classnames(styles.minion, 
                                isDragging ? styles['minion-drag'] : '',
                                canDrop && isOver ? styles['minion-can-drop'] : '')
    return connectDragSource(connectDropTarget(
      <div className={classNames}>
        <img src={require("images/champions/"+name.toLowerCase()+".png") }/>           
        <div className={styles.attack}>   
          <span>{attack}</span>
           <img src={require("images/card/attack.png")} />
        </div>
        <div className={styles.health}>   
          <span>{health}</span>
           <img src={require("images/card/health.png")} />
        </div>

        <div className={styles.gem}>   
          <span>{mana}</span>
           <img src={require("images/card/gem.png")} />
        </div>
      </div>
    ))
  }
}