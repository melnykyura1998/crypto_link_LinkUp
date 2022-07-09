import React,{useState} from 'react';

import logo from '../../assets/imgs/logo.svg';
import classes from "./header.module.scss";
import menuMobile from "../../assets/imgs/menuMobile.png"


const Header = () => {

    const [show,setShow] = useState(1);



    return (
            <nav className={classes.wrap}>
                <div className={classes.logo}>
                    <img src={logo} alt="logo" className={classes.img}/>
                    <div className={classes.name}>CryptoLink</div>
                </div>
                <div className={classes.menuWrap}>
                    <div onClick={()=>setShow(show + 1)} className={classes.menuMobile}><img src={menuMobile} alt="menu"/></div>
                    <div
                         className={show % 2 === 0 ? classes.loginActive : classes.login}>Log In
                    </div>
                </div>
            </nav>
    );
};

export {Header};