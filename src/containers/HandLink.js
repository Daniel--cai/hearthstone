import { connect } from 'react-redux';
import { addCard, playCard } from 'actions/cards';

import Hand from 'components/Hand';

const mapStateToProps = (state, ownProps) => {
    return {
        cards: state.field.cards
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        playCard: (index) => {
            dispatch(playCard(0,index))
        }
    }
}

const HandLink = connect(mapStateToProps, mapDispatchToProps)(Hand)

export default HandLink;