import { connect } from 'react-redux';
import { playCard, removeCard, removeGem } from 'actions/cards';


import Hand from 'components/Hand';

const mapStateToProps = (state, ownProps) => {
    return {
        cards : state.cards,
        gem : state.game.gem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        playCard: (id) => {   
            dispatch(playCard(0,id))
        },

        removeGem: (amount) => {
            dispatch(removeGem(amount));
        }

    }
}

const HandLink = connect(mapStateToProps, mapDispatchToProps)(Hand)

export default HandLink;