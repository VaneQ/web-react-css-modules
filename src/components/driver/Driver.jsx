import React from 'react'
import styles from './Driver.module.css'
import Drive from '../../assets/drive.png'

const Driver = () => {
    return (
        <div className={styles.drive}>
            <div className={styles.left}>
                <img src={Drive} alt="driver"/>
            </div>
            <div className={styles.h2}>
                <h2>Only the best performance<span> at the reach of a click </span></h2>
                <p>More than the 97% of our users obtain the car of their dreams</p>
                <button>Browse</button>
            </div>
        </div>
    )
}

export default Driver