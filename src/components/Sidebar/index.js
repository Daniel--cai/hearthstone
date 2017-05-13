import React from 'react';
import styles from './Sidebar.scss'
var logo = require('images/site/logo.png')
var FontAwesome = require('react-fontawesome');

export default class Sidebar extends React.Component {
    render(){
        return(
            <div className={styles.sidebar}>
                <img src={logo} className={styles.logo}/>
                <ul>
                    <li><FontAwesome name='home' className={styles.bullet}/>Home</li>
                    <li><FontAwesome name='th-large' className={styles.bullet}/>Products</li>
                    <li><FontAwesome name='snowflake-o' className={styles.bullet}/>Risk Assessments</li>
                    <li><FontAwesome name='pie-chart' className={styles.bullet}/>Reports</li>          
                    <li><FontAwesome name='align-justify' className={styles.bullet}/>Coordinator</li>              
                </ul>
            </div>
        )
    };
}

