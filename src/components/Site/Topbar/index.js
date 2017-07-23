import React from 'react';
import styles from './Topbar.scss'
var logo = require('images/site/logo.png')
var FontAwesome = require('react-fontawesome');

export default class Sidebar extends React.Component {
    
    render(){
        return(
            <div className={styles.topbar}>

                <div className={styles.header}>
                    <span className={styles.heading}><FontAwesome name='pied-piper' size='2x'/></span>
                      <span><FontAwesome name='upload'/>Upload</span>
                       <span><FontAwesome name='chain'/>Share Link</span>
                       <label className={styles.search}>
                        <span><FontAwesome name='search'/></span>
                        <input  placeholder="Search" type="text"></input>         
                       </label>   
                </div>
              
            </div>
        )
    };
}

