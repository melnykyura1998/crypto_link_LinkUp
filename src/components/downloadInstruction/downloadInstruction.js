import React from 'react';

import classes from "./dovnload.module.scss";
import {data} from '../../data/data';
import {Instruction} from "./instruction";
import phone from '../../assets/imgs/phone illustration (1).png';
import {Button2} from "../../ui/buttons/buutton2";


const DownloadInstruction = () => {

    let {title, instruction} = data.downloadInstruction
    let wordArr = title.split(' ')
    let newtitle = wordArr.slice(0, wordArr.length - 2).join(' ') + ' '
    let lastWord = wordArr[wordArr.length - 1]

    return (
        <div className={classes.wrap}>
            <div className={classes.header}>
                <div className={classes.title1}>{newtitle}<span>{lastWord}</span></div>
                <div className={classes.buttons}>
                    <Button2 color={'black'} aboveStore={'GET IT ON'} store={'Google Play'}/>
                    <Button2 color={'black'} aboveStore={'Download on the'} store={'App Store'}/>
                </div>
            </div>
            <div className={classes.contentWrap}>
                <div className={classes.instructions}>
                    {instruction.map(item => <Instruction instruction={item} key={item.id}/>)}
                </div>
                <img className={classes.img} src={phone} alt=""/>
            </div>
            <div className={classes.buttons2}>
                <Button2 color={'black'} aboveStore={'GET IT ON'} store={'Google Play'}/>
                <Button2 color={'black'} aboveStore={'Download on the'} store={'App Store'}/>
            </div>
        </div>
    );
};

export {DownloadInstruction};