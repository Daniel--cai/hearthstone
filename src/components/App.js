import React from 'react';
import styles from './App.scss';
import Card from './Card'
import InputText from './InputText'

class App extends React.Component {
    handleClick(){
        console.log('clice,d!')
    }
    render(){
        return (
            <div className={styles.app}>
                 <InputText />
                <Card onClick={this.handleClick} title="thereisddfsfdfdon"/>
               
            </div>
        )
    }
}

export default App;