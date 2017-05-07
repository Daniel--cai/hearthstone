import { connect } from 'react-redux';
import { playCard, removeCard, removeGem } from 'actions/cards';


import Player from 'components/Player';

const mapStateToProps = (state, ownProps) => {
    return {
        health : state.game.playerhealth
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

const PlayerLink = connect(mapStateToProps, mapDispatchToProps)(Player)

export default PlayerLink;