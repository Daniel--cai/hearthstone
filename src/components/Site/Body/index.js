import React from 'react';
import styles from './Body.scss';
import Tile from 'site/Tile'
import Sidebar from 'site/Sidebar'
import Fileviewer from 'site/Fileviewer'
export default class Body extends React.Component {

    constructor(props){
        super(props);

    }
    componentDidMount() {
      
    }
    render(){
        return (
            <div className={styles.body}>
                <Sidebar/>
                <Fileviewer/>
            </div>

        )
    }
}