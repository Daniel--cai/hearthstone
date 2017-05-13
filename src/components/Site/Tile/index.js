import React from 'react';
import styles from './Tile.scss'
var logo = require('images/site/logo.png')
export default class Tile extends React.Component {
    
    render(){
        return(
            <div className={styles.tile}>
                 <span>Places > Pied Piper</span>     
            </div>
        )
    };
}

