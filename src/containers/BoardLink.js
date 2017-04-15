import { connect } from 'react-redux';
import { playCard } from 'actions/cards';

import Board from 'components/Board';

const mapStateToProps = (state, ownProps) => {
    return {
        board: state.field.board
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

const BoardLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default BoardLink;