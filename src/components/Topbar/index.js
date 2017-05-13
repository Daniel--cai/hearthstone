import React from 'react';
import styles from './Topbar.scss'
export default class Sidebar extends React.Component {
    render(){
        return(
            <div className={styles.topbar}>
                <span>Places > Pied Piper</span>
            </div>
        )
    };
}

