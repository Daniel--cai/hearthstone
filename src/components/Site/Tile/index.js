import React from 'react';
import g_styles from 'css/Tile.scss'
var logo = require('images/site/logo.png')
export default class Tile extends React.Component {
    
    render(){
        return(
            <div className={g_styles.tile}>
                 <span>Places > Pied Piper</span>     
            </div>
        )
    };
}

