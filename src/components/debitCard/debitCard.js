import React  from 'react';

import dbCardBck from '../../assets/imgs/bkCard.png';
import dbCard from '../../assets/imgs/card.png';
import dbCargColor from '../../assets/imgs/Background.png';
import logo from '../../assets/imgs/LogoCard.png';
import classes from "./debitCard.module.scss";
import {data} from '../../data/data';
import dbCardBck2 from '../../assets/imgs/alex-wong-FIyiDmEVbnM-unsplash 1 3 (1).png';


const DebitCard = () => {


    return (
        <div className={classes.wrap}>
            <div>
                <div className={classes.contentWrap}>
                    <div className={classes.cardWrap2}>
                        <div className={classes.cardWrap}>
                            <img className={classes.logo} src={logo} alt="LinkUp"/>
                            <img className={classes.cardBk} src={dbCargColor} alt=""/>
                            <img className={classes.card} src={dbCard} alt=""/>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.title}>{data.debitCard.title}</div>
                        <div className={classes.subtitle}>{data.debitCard.subtitle}</div>
                        <div className={classes.footer}>{data.debitCard.footer}</div>
                    </div>
                </div>
                <div className={classes.gradient}>
                    <img className={classes.img1} src={dbCardBck} alt=""/>
                    <img className={classes.img2} src={dbCardBck2} alt=""/>
                </div>
            </div>

        </div>
    );
};

export {DebitCard};