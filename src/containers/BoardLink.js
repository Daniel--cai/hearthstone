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
        onClick: (index) => {
            console.log('add card')
               
        }
    }
}

const BoardLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default BoardLink;