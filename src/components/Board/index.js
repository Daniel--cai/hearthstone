import React from 'react';
import Minion from 'components/Minion'
import ReactDOM from 'react-dom'
import styles from './Board.scss'
import {ItemTypes} from 'components/Card'
import { DropTarget } from 'react-dnd';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const boardTarget = {
    drop(props, monitor){
        const card = monitor.getItem();
        card.playCard();
    }
}

@DropTarget(ItemTypes.CARD, boardTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
}))

export default class Board extends React.Component {
    componentDidUpdate(prevProps, prevState) {    
    }    

    render(){
        const board = []
        const {connectDropTarget, isOver } = this.props
        this.props.board.forEach(function(b) {
            board.push(b.map((card, index) => {
            return (<Minion name={card.name} 
                            key={index} 
                            attack={card.attack}
                            health={card.health} 
                            mana={card.mana}
            />)}))}, this);
        return connectDropTarget(
            <div className={styles.board}>
                
                    <CSSTransitionGroup
                        transitionName={{
                            enter: styles.enter,
                            enterActive: styles.enteractive,
                            leave: styles.leave,
                            leaveActive: styles.leaveactive,
                        }} 
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                    {board[0]}      
                    </CSSTransitionGroup>
              
            </div>
        )
    };
}
