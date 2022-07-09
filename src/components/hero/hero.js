import React from 'react';

import classes from "./hero.module.scss";
import iphone from '../../assets/imgs/iPhoneHero.png';
import {Header} from "../header/header";
import ellipses from '../../assets/imgs/ellipses.svg'
import {Button1} from "../../ui";
import {data} from "../../data/data";



const Hero = () => {


    return (
        <div className={classes.vrap}>
            <Header/>
            <div className={classes.contentWraper}>
                <div className={classes.content}>
                    <div className={classes.titel}>{data.hero.title}</div>
                    <div className={classes.subtitle}>{data.hero.title}</div>
                    <div className={classes.button}>
                        <Button1 rotate={0}>LEARN MORE</Button1>
                        <Button1 rotate={-135} color={`green`}>LEARN MORE</Button1>
                    </div>
                </div>
                <div className={classes.imgWrap}>
                    <div className={classes.mobile}><img src={iphone} alt="info" className={classes.imgs}/></div>
                    <div className={classes.mobile}><img src={ellipses} className={classes.ellipses}/></div>
                </div>
            </div>

        </div>

    );
};

export {Hero};