import React from 'react';
import Minion from 'components/Minion'
import ReactDOM from 'react-dom'
import styles from './Board.scss'
import {ItemTypes} from 'components/Card'
import { DropTarget } from 'react-dnd';

const boardTarget = {
    drop(props, monitor){
        const card = monitor.getItem();
        card.playCard(card.index);
    }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}


class Board extends React.Component {
    componentDidUpdate(prevProps, prevState) {    
    }    

    render(){
        const board = []
        const {connectDropTarget, isOver } = this.props
        this.props.board.forEach(function(b) {
            board.push(b.map((card, index) => {
            return (<Minion   name={card.name} 
                            key={index} 
                            attack={card.attack}
                            health={card.health} 
                            mana={card.mana}
            />)}))}, this);
        return connectDropTarget(
            <div className={styles.board}>
                <div className="player0" >
                    {board[0]}
                </div>
                <div className="player1" >
                    {board[1]}
                </div>
            </div>
        )
    };
}

export default DropTarget(ItemTypes.CARD, boardTarget, collect)(Board);

//    <button onClick = {onClick} type ="button">Clic mfe</button>