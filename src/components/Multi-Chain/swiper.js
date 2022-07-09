import React, {useState} from 'react';

import {Blockchain} from "./blockchain";
import classes from "./multi.chaine.module.scss";
import previos from "../../assets/imgs/previos.png";
import next from "../../assets/imgs/next.png";


const Swiper = ({blockchains}) => {

    let windowWidth = window.screen.width
    const [xStart, setXStart] = useState('');
    const [item, setItem] = useState(1);

    const touchStart = (e) => {
        setXStart(e.touches[0].clientX)
    };

    const toucheMove = (e) => {
        let xFinish = e.touches[0].clientX
        if ((xStart - xFinish) > windowWidth / 2) {
            setXStart(xFinish)
            nextItem()

        } else if ((xStart - xFinish) < -windowWidth / 2) {
            setXStart(xFinish)
            previosItem()
        }
    };

    const nextItem = () => {
        if (item < blockchains.length - 1) {
            setItem(item + 1)
        }
    }

    const previosItem = () => {
        if (item > 0) {
            setItem(item - 1)
        }
    }

    return (
        <div onTouchStart={touchStart} onTouchMove={toucheMove}>
            <div className={classes.cardsWraperMobile}>
                <Blockchain blockchain={blockchains[item]}/>
            </div>
            <div className={classes.buttons}>
                <img src={previos} onClick={previosItem} alt=""/>
                <div className={item === 0? classes.active: classes.noActive}/>
                <div className={item === 1? classes.active: classes.noActive}/>
                <div className={item === 2? classes.active: classes.noActive}/>
                <div className={item === 3? classes.active: classes.noActive}/>
                <img src={next} alt="" onClick={nextItem}/>
            </div>
        </div>
    );
};

export {Swiper};