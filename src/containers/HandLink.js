import { connect } from 'react-redux';
import { playCard, removeCard } from 'actions/cards';


import Hand from 'components/Hand';

const mapStateToProps = (state, ownProps) => {
    return {
        cards : state.cards
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        playCard: (id) => {
            dispatch(playCard(0,id))
        }
    }
}

const HandLink = connect(mapStateToProps, mapDispatchToProps)(Hand)

export default HandLink;