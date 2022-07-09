import React from 'react';

import classes from "./footer.module.scss";
import {data} from '../../data/data';
import {Button2} from "../../ui/buttons/buutton2";


const Footer = () => {
    return (
        <div className={classes.background}>
            <div className={classes.wrap}>
                <div className={classes.footerTop}>
                    <div className={classes.emailWrap}>
                        <div className={classes.text}>Need some help?</div>
                        <div className={classes.email}>{data.footer.email}</div>
                    </div>
                    <div className={classes.socials}>
                        {data.footer.socials.map((item,index) => <img className={classes.img} key={index} src={item}/>)}
                    </div>

                </div>
                <hr/>
                <div className={classes.footerBottom}>
                    <div className={classes.textWrap}>
                        <div className={classes.mobileNo}>
                            <div className={classes.textBottom}>© CryptoLink 2022. All Right Reserved.</div>
                        </div>
                        <div className={classes.textBottom}>Terms of Use</div>
                        <div className={classes.textBottom}>Help</div>
                    </div>
                    <div className={classes.buttons}>
                        <Button2 store={'Google Play'} aboveStore={'GET IT ON'}/>
                        <Button2 store={'App Store'} aboveStore={'Downloadon the'}/>
                    </div>
                    <div className={classes.mobile}>
                        <div className={classes.textBottom}>© CryptoLink 2022. All Right Reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Footer};