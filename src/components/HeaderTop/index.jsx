import React from "react";
import classnames from "classnames";
import { useMediaQuery } from "react-responsive";
import styles from "./styles.module.scss";

import telegramWhite from "assets/img/telegram-white.svg";
import whatsappWhite from "assets/img/whatsapp-white.svg";
import telephoneCircleWhite from "assets/img/telephone-circle-white.svg";
import instagramCircleWhite from "assets/img/instagram-circle-white.svg";
import telegramCircleWhite from "assets/img/telegram-circle-white.svg";

const HeaderTop = props => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    if (isMobile) {
        return (<div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={classnames(styles.wrapperInner, styles.left)}>
                    <div className={styles.leftInner}>
                        <a className={styles.leftInnerLinkImg} href="tel:88007073379">
                            <img src={telephoneCircleWhite} alt="telephone"/>
                        </a>
                        <a className={styles.leftInnerLinkImg} href="https://www.instagram.com/spin4spin">
                            <img src={instagramCircleWhite} alt="instagram"/>
                        </a>
                    </div>
                </div>
                <div className={classnames(styles.wrapperInner, styles.center)}>
                    <a className={styles.centerLink} href="/">Бесплатная доставка</a>
                    <a className={styles.centerLink} href="/">по Москве при заказе от 12000 рублей</a>
                </div>
                <div className={classnames(styles.wrapperInner, styles.right)}>
                    <a className={styles.rightInnerLinkImg} href="https://t.me/spinoffice">
                        <img src={telegramCircleWhite} alt="telegram"/>
                    </a>
                    <a className={styles.rightInnerLinkImg} href="https://wa.me/79779272006?text=Добрый день">
                        <img src={whatsappWhite} alt="whatsapp"/>
                    </a>
                </div>
            </div>
        </div>);
    }

    return (<div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={classnames(styles.wrapperInner, styles.left)}>
                <div className={styles.leftInner}>
                    <a className={styles.leftInnerLinkTxt} href="tel:88007073379">8(800)707-33-79</a>
                    <div className={styles.leftInnerLinkTxt} href="tel:88007073379">с 12 до 21 без выходных</div>
                </div>
                <div className={styles.leftInner}>
                    <a className={styles.leftInnerImg} href="https://t.me/spinoffice">
                        <img src={telegramWhite} alt="telegram" />
                    </a>
                    <a className={styles.leftInnerImg} href="https://wa.me/79779272006?text=Добрый день">
                        <img src={whatsappWhite} alt="whatsapp" />
                    </a>
                </div>
            </div>
            <div className={classnames(styles.wrapperInner, styles.center)}>
                <a className={styles.centerLink} href="/">Бесплатная доставка *</a>
                <a className={styles.centerLink} href="/">Бесплатный возврат</a>
            </div>
            <div className={classnames(styles.wrapperInner, styles.right)}>
                <a href="/">Контакты</a>
            </div>
        </div>
    </div>);
};

export default HeaderTop;