import React from 'react';
import styles from './App.scss';
import Card from 'components/Card'
import HandLink from "containers/HandLink";
import EndTurnLink from 'containers/EndTurnLink'

class App extends React.Component {
    handleClick(){
        console.log('clice,d!')
    }
    render(){
        return (
          <div className={styles.app}>
              <EndTurnLink name="shyvana"/>
              <EndTurnLink name="caitlyn"/>
            <HandLink/>
            
          </div>
        )
    }
}

export default App;