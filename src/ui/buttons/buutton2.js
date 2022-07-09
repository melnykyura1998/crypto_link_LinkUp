import React from 'react';
import classes from "./button.module.scss";
import googlePlay from "../../assets/imgs/google_play-512 1.png"
import appStore from "../../assets/imgs/apple-black.png"
import classNames from "classnames";
import "../../variables.scss"
import "../../App.scss"

const Button2 = ({store, aboveStore, color}) => {

    let background = 'rgba(255, 255, 255, 0.06)'
    if (color === 'black') {
        background = '#16181D'
    }
    return (

        <div className={classes.button2} style={{background: `${background}`}}>
            <img src={store === 'App Store' ? appStore : googlePlay} className={classes.img2} alt={'info'}/>
            <div className={classes.content}>
                <div>{aboveStore}</div>
                <div className={classes.store}>{store}</div>
            </div>

        </div>

    );
};

export {Button2};