import { connect } from 'react-redux';
import { addCard, playCard } from 'actions/cards';
import { CardStatus } from 'reducers'

import Hand from 'components/Hand';

const mapStateToProps = (state, ownProps) => {

    
    return {
        cards : state.entity.minions.filter(c => c.status === CardStatus.DECK)
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