import React from 'react';
import Minion from 'components/Minion'
import ReactDOM from 'react-dom'

class Board extends React.Component {
    
    componentDidUpdate(prevProps, prevState) {    
    }    

    render(){
        const board = []
        this.props.board.forEach(function(b) {
            board.push(b.map((card, index) => {
            return (<Minion   name={card.name} 
                            key={index} 
                            attack={card.attack}
                            health={card.health} 
                            mana={card.mana}
                            onClick={this.props.onClick}
            />)}))}, this);
        return(
            <div>
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

export default Board;

//    <button onClick = {onClick} type ="button">Clic mfe</button>