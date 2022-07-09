import React from 'react';
import {data} from '../../data/data'
import {Blockchain} from "./blockchain";
import classes from "./multi.chaine.module.scss";
import {Swiper} from "./swiper";

const MultiChain = () => {
    return (
        <div className={classes.wrap}>
            <div className={classes.title}>{data.multiChain.title}</div>
            <div className={classes.subTitle}>{data.multiChain.subtitle}</div>
            <div className={classes.cardsWraper}>
                {data.multiChain.img.map(item => <Blockchain blockchain={item} key={item.name}/>)}
            </div>
            <div className={classes.cardsWraperMobile}>
                <Swiper blockchains={data.multiChain.img}/>
            </div>
        </div>
    );
};

export {MultiChain};