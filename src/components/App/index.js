import React from 'react';
import styles from './App.scss';
import HandLink from "containers/HandLink";
import EndTurnLink from 'containers/EndTurnLink'
import BoardLink from 'containers/BoardLink'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


@DragDropContext(HTML5Backend)
export default class App extends React.Component {

    constructor(props){
        super(props);

    }

    componentDidMount() {
      
    }

    render(){
        return (
            <div className={styles.app}>
        <HandLink/>
                <EndTurnLink name="shyvana" />
                <EndTurnLink name="caitlyn"/>
                <EndTurnLink name="jayce"/>
                <BoardLink/>
         
            </div>
        )
    }
}