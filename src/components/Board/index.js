import React from 'react';
import Card from 'components/Card'
import ReactDOM from 'react-dom'

class Board extends React.Component {
    
    componentDidUpdate(prevProps, prevState) {    
    }    

    render(){
        console.log(this.props)
        const board = []
        this.props.board.forEach(function(b) {
            board.push(b.map((card, index) => {
            return (<Card   name={card.name} 
                            key={index} 
                            attack={card.attack}
                            health={card.health} 
                            mana={card.mana}/>)}))
        }, this);
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