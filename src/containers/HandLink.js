import { connect } from 'react-redux';
import { addCard } from 'actions/cards';

import Hand from 'components/Hand';

const mapStateToProps = (state, ownProps) => {
    return {
        cards: state.cards
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (name) => {
            dispatch(addCard(name))
        }
    }
}

const HandLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Hand)

export default HandLink;