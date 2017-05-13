import React from 'react';
import styles from './Home.scss';
import Sidebar from 'components/Sidebar'
import Topbar from 'components/Topbar'

export default class Home extends React.Component {

    constructor(props){
        super(props);

    }
    componentDidMount() {
      
    }
    render(){
        return (
            <div className={styles.home}>

                <Sidebar/>
                <Topbar/>

            </div>

        )
    }
}