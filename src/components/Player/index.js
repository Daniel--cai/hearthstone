import React from 'react';
import styles from "./Player.scss";
import { DropTarget } from 'react-dnd';
import classnames from 'classnames'
import {ItemTypes} from 'components/Minion'


const playerTarget = {
    drop(props, monitor){
        const card = monitor.getItem();
        props.removeHealth(card.attack)
    }
}

@DropTarget(ItemTypes.MINION, playerTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
}))
export default class Player extends React.Component{ 

  render(){
    var {health} = this.props
    const {connectDropTarget, isOver } = this.props
    let classNames = classnames(styles.player);
    return connectDropTarget(
      <div className={classNames}>
  
        <div className={styles.gem}>   
          <span>{health}</span>
           <img src={require("images/card/health.png")} />
        </div>
      </div>

    )
  }
}