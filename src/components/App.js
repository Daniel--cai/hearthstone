import React from 'react';
import styles from './App.css';
import Card from './Card'
import InputText from './InputText'

class App extends React.Component {
    render(){
        return (
            <div className={styles.app}>
                 <InputText />
                <Card title="thereisdsfdfdon"/>
               
            </div>
        )
    }
}

export default App;