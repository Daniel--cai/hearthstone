import { connect } from 'react-redux';
import { newCard, requestAddCard, addGem, addMaxGem} from 'actions/cards';
import EndTurn from 'components/EndTurn'


const mapStateToProps = (state, ownProps) => {
    return {
        state:state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (name) => {
            dispatch(addMaxGem(1));
            dispatch(addGem(10));
            dispatch(requestAddCard(ownProps.name));
        }
    }
}

const EndTurnLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(EndTurn)

export default EndTurnLink;