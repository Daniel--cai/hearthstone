import { connect } from 'react-redux';
import { attackMinion } from 'actions/cards';

import Board from 'components/Board';

const mapStateToProps = (state, ownProps) => {
    return {
        board: state.board
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {    
    return {
        
        attackMinion: (source,target) => {
            dispatch(attackMinion(source,target));
        }
    }
}

const BoardLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default BoardLink;