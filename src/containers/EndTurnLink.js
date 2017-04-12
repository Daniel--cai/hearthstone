import { connect } from 'react-redux';
import { addCard } from 'actions/cards';
import EndTurn from 'components/EndTurn'
const mapStateToProps = (state, ownProps) => {
    return {
        state:state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (name) => {
            dispatch(addCard(ownProps.name))
        }
    }
}

const EndTurnLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(EndTurn)

export default EndTurnLink;