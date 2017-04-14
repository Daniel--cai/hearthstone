import React from 'react';
import Card from 'components/Card'
import ReactDOM from 'react-dom'

class Hand extends React.Component {
    
    componentDidUpdate(prevProps, prevState) {

        
    }    

    render(){
        const hand = this.props.cards.map((card, index) => {
            return (<Card   name={card.name} 
                            key={index} 
                            attack={card.attack}
                            health={card.health} 
                            mana={card.mana}
                            onClick={() => {this.props.onClick(index)}}
                        />)})
        return(
            <div className="hand" ref={(h)=>this.ref = h}>
                {hand}
            </div>
        )
    };
}

export default Hand;

//    <button onClick = {onClick} type ="button">Clic mfe</button>