import React from 'react'
import styles from './Banner.module.css'
import { AiOutlineSearch } from 'react-icons/ai'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <form>
                <div className={styles.text}>
                    <label>Where</label>
                    <input className={styles.input_text} type="text" placeholder='Search location' />
                </div>
                <div className={styles.from}>
                    <span className={styles.border}></span>
                    <label>From</label>
                    <input type="date" />
                </div>
                <div className={styles.until}>
                <span className={styles.border}></span>
                    <label>Until</label>
                    <input type="date" />
                </div>
                <div className={styles.search_btn}>
                    <AiOutlineSearch className={styles.icon}/>
                    <button className={styles.btn} type='button'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Banner