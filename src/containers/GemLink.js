import { connect } from 'react-redux';
import { playCard, removeCard } from 'actions/cards';


import Gem from 'components/Gem';

const mapStateToProps = (state, ownProps) => {
    return {
        gems : state.game
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

const GemLink = connect(mapStateToProps, mapDispatchToProps)(Gem)

export default GemLink;