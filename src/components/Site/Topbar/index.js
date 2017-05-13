import React from 'react';
import styles from './Topbar.scss'
var logo = require('images/site/logo.png')
export default class Sidebar extends React.Component {
    
    render(){
        return(
            <div className={styles.topbar}>
                <div className={styles.logo}>
                    <img src={logo}/>
                </div>
                <div className={styles.header}>
                      <span>Places > Pied Piper</span>
                </div>
              
            </div>
        )
    };
}

