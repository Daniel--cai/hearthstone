import { connect } from 'react-redux';
import { playCard } from 'actions/cards';

import Board from 'components/Board';

const mapStateToProps = (state, ownProps) => {
    return {
        board: state.board
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (name) => {
            console.log('board clicked')
        }
    }
}

const BoardLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default BoardLink;