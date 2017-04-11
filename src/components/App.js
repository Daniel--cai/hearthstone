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
                <Card attack="4" health="4" mana="2" name="Shyvana"/>
                 <Card attack="4" health="4" mana="2" name="Caitlyn"/>
            </div>
        )
    }
}

export default App;