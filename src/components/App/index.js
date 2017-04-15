import React from 'react';
import styles from './App.scss';
import HandLink from "containers/HandLink";
import EndTurnLink from 'containers/EndTurnLink'
import BoardLink from 'containers/BoardLink'
import { DragSource } from 'react-dnd';

class App extends React.Component {
    render(){
        return (
            <div className={styles.app}>

                <EndTurnLink name="shyvana" />
                <EndTurnLink name="caitlyn"/>
                <EndTurnLink name="ddafd"/>
                <BoardLink/>
                 <HandLink/>
            </div>
        )
    }
}

export default App;