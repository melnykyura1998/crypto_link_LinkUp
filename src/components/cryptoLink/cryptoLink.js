import React from 'react';

import phone2 from '../../assets/imgs/phone illustration.png';
import {Button1} from "../../ui";
import classes from "./cryptoLink.module.scss";
import {Button2} from "../../ui/buttons/buutton2";
import {data} from "../../data/data";
export {data} from "../../data/data"


const CryptoLink = () => {

    return (
        <div className={classes.wrap}>
            <div>
                <img className={classes.img} src={phone2} alt="phone"/>
            </div>

            <div className={classes.content}>
                <div className={classes.title}>{data.cryptolink.title}</div>
                <div className={classes.subtitle}>{data.cryptolink.subtitle}</div>
                <div className={classes.button}><Button1 color={'black'} rotate={-135}>GET STARTED</Button1></div>
                <div className={classes.buttons}>
                    <Button2 color={'black'} store={'Google Play'} aboveStore={'GET IT ON'}/>
                    <Button2 color={'black'} store={'App Store'} aboveStore={'Dowmload on the'}/>
                </div>

            </div>


        </div>
    );
};

export {CryptoLink};