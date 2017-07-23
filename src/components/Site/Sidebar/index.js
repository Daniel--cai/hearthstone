import React from 'react';
import styles from './Sidebar.scss'

var FontAwesome = require('react-fontawesome');

export default class Sidebar extends React.Component {
    render(){
        return(
            <div className={styles.sidebar}>
               
                <div className={styles.links}> 
                <table>
                    <tr><td colSpan={2}>MY PIED PIPER</td></tr>
                    <tr>
                        <td><FontAwesome name='folder-open-o'className={styles.bullet}/></td>
                        <td><a href="#">Recent</a></td>
                    </tr>
                    <tr>
                        <td><FontAwesome name='star-o'className={styles.bullet}/></td>
                        <td><a href="#">Starred</a></td>
                        </tr>
                    <tr>
                        <td><FontAwesome name='file'className={styles.bullet}/></td>
                        <td><a href="#">Files</a></td>
                        </tr>
                    <tr>
                        <td><FontAwesome name='camera'className={styles.bullet}/></td>
                        <td><a href="#">Photos</a></td>
                        </tr>                      
                 </table>
                </div>
            </div>
        )
    };
}

