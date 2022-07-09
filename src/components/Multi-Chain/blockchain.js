import React from 'react';
import classes from "./multi.chaine.module.scss";
import background from  "../../assets/imgs/blockchainBk.png"

const Blockchain = ({ blockchain}) => {
    return (
        <div className={classes.cardWrap}>
            <img className={classes.logo} src={blockchain.img} alt=""/>
            <img className={classes.background} src={background}/>
            <div className={classes.name}>{blockchain.name}</div>
        </div>
    );
};

export {Blockchain};