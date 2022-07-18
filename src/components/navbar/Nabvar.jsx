import React, { useState } from 'react'
import styles from './Nabvar.module.css'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import Logo from '../../assets/logo.png'

const Nabvar = () => {

    const [nav, setNav] = useState(false)

    const toggleNavbar = () => {
        setNav(!nav)
    } 

    return (
        <header className={styles.navbar}>
            <img src={Logo} alt="logo"></img>
            <nav>
                <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                    <li>
                        <a href="/">More info</a>
                    </li>
                    <li>
                        <a href="/">Sign in</a>
                    </li>
                    <li>
                        <a href="/">Sign up</a>
                    </li>
                    <li>
                        <AiOutlineSearch size={25} style={{marginTop: '6px'}} />
                    </li>
                    <li>
                        <AiOutlineUser size={25} style={{marginTop: '6px'}}/>
                    </li>
                </ul>
            </nav>
            <div onClick={ toggleNavbar } className={styles.mobile_btn}>
                { !nav ? <AiOutlineMenu size={25}/> :
                <AiOutlineClose size={25}/>}
            </div>
        </header>
    )
}

export default Nabvar