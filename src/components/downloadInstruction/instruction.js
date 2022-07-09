import React from 'react';
import classes from "./dovnload.module.scss";

const Instruction = ({instruction}) => {

    return (
        <div className={classes.itemWrap}>
            <div className={classes.number}>{instruction.id}</div>
            <div className={classes.titleWrap}>
                <div className={classes.title}>{instruction.title}</div>
                <div className={classes.subtitle}>{instruction.subtitle}</div>
            </div>
        </div>
    );
};

export {Instruction};