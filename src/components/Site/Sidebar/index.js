import React from 'react';
import styles from './Sidebar.scss'

var FontAwesome = require('react-fontawesome');

export default class Sidebar extends React.Component {
    render(){
        return(
            <div className={styles.sidebar}>
                <div className={styles.links}>
                <ul>
                    <li>
                        <FontAwesome name='home' className={styles.bullet}/>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <FontAwesome name='th-large' className={styles.bullet}/>
                        <a href="#">Card List</a>
                        </li>
                    <li>
                        <FontAwesome name='snowflake-o' className={styles.bullet}/>
                        <a href="#">Ranking</a>
                        </li>
                    <li>
                        <FontAwesome name='pie-chart' className={styles.bullet}/>
                        <a href="#">Play</a>
                        </li>          
                    <li>
                        <FontAwesome name='align-justify' className={styles.bullet}/>
                        <a href="#">Disclaimer</a>
                        </li>              
                </ul>
                </div>
            </div>
        )
    };
}

