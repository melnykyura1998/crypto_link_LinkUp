import React from 'react';
import classes from "./button.module.scss";
import arrow from "../../assets/imgs/Arrow.png"
import classNames from "classnames";
import "../../variables.scss"
import "../../App.scss"

const Button1 = ({children, color, rotate}) => {

    const iconStyle={
        transform:`rotate(${rotate}deg)`
    }
    let background ='rgba(255, 255, 255, 0.06)'
    if(color==='green'){
        background = '#00AD6F'
    }else if(color === 'black'){
        background = '#16181D'
    }
    return (
        <div>
            <div className={classes.button} style={{background:`${background}`}} >
                <div>
                    {children}
                    <img src={arrow} className={classes.img} style={iconStyle} alt={'info'}/>
                </div>
            </div>
        </div>
    );
};

export {Button1};