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
                            key={card.id} 
                            attack={card.attack}
                            health={card.health} 
                            mana={card.mana}
                            gem = {this.props.gem}
                            playCard={() => {this.props.playCard(card.id)}}
                            removeGem={() => {this.props.removeGem(card.mana)}}
                        />)})
        return(
            <div className={styles.hand}>
                {hand}
            </div>
        )
    };
}
