import React from 'react';
import styles from './Gem.scss'
const GemOn = require('images/card/gem.png')
const GemOff = require('images/card/gemoff.png')
export default class Gem extends React.Component {

    render(){
        const gem = this.props.gems.gem
        const maxgem = this.props.gems.maxgem;
        const gemson = [...Array(gem)].map((m,i)=> {
            return <img src={GemOn} key={i}/>
        })
        const gemsoff = [...Array(maxgem - gem)].map((m,i)=> {
            return <img src={GemOff} key={i}/>
        })

        return(
            <div className={styles.gembar}>
                <span>{gem}/{maxgem}</span>
                {gemson}
                {gemsoff}
            </div>
        )
    };
}

