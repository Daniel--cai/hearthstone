import { connect } from 'react-redux';
import { playCard, removeCard, removeGem,addPlayerHealth , removePlayerHealth } from 'actions/cards';


import Player from 'components/Player';

const mapStateToProps = (state, ownProps) => {
    return {
        health : state.game.playerhealth
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addHealth: (amount) => {   
            dispatch(addPlayerHealth(amount))
        },
        removeHealth: (amount) => {   
            dispatch(removePlayerHealth(amount))
        },
    }
}

const PlayerLink = connect(mapStateToProps, mapDispatchToProps)(Player)

export default PlayerLink;