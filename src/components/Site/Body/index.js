import React from 'react';
import styles from './Body.scss';
import Tile from 'site/Tile'
export default class Body extends React.Component {

    constructor(props){
        super(props);

    }
    componentDidMount() {
      
    }
    render(){
        return (
            <div className={styles.body}>
                <div className = {styles.tilerow}>
                    <Tile className={styles.tile}/>
                    <Tile className={styles.tile}/>
                    <Tile className={styles.tile}/>
                </div>
                <div className = {styles.tilerow}>
                    <div className = {styles.tilecolumn}>
                    <Tile className={styles.tile}/>
                    <Tile className={styles.tile}/>
                    </div >
                    <div className={styles.tileextended}>
                        <Tile className={styles.tile}/>
                     </div>
                </div>
            </div>

        )
    }
}