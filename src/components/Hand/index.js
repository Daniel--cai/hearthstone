import React from 'react';
import Card from 'components/Card'
import ReactDOM from 'react-dom'
import styles from './Hand.scss'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


export default class Hand extends React.Component {
    
    componentDidUpdate(prevProps, prevState) {

        
    }    

    render(){
        const hand = this.props.cards.map((card, index) => {
            return (<Card   name={card.name} 
                            key={index} 
                            attack={card.attack}
                            health={card.health} 
                            mana={card.mana}
                            index= {index}
                            playCard={() => {this.props.playCard(index)}}
                        />)})
        return(
            <div className={styles.hand} ref={(h)=>this.ref = h}>
                {hand}
            </div>
        )
    };
}
