import { connect } from 'react-redux';
import { addCard } from 'actions/cards';

import Board from 'components/Board';

const mapStateToProps = (state, ownProps) => {
    return {
        board: state.board
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (name) => {
            dispatch(addCard(name))
        }
    }
}

const BoardLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default BoardLink;