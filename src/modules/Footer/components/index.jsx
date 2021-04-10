import React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";
import logo from "assets/img/logo.svg";
import whatsappFooter from "assets/img/whatsapp_footer.svg";
import telegramFooter from "assets/img/telegram_footer.svg";

const Footer = () => {
    return(<footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.topLogo}>
                    <img src={logo} alt="Spin 4 Spin" />
                </div>
                <div className={styles.topTxt}>Купил Продал Повторил</div>
            </div>
            <div className={styles.center}>
                <div className={styles.centerLinks}>
                    <a className={styles.centerLinksItem} href="tel:+78007073379">8(800)707-33-79</a>
                    <a className={styles.centerLinksItem} href="https://t.me/spinoffice">
                        <img className={styles.centerLinksItemImg} src={telegramFooter} alt="telegram" />
                    </a>
                    <a className={styles.centerLinksItem} href="https://wa.me/79779272006?text=Добрый день">
                        <img className={styles.centerLinksItemImg} src={whatsappFooter} alt="Whatsapp" />
                    </a>
                </div>
                <a href="https://yandex.ru/maps/-/CCUIZRDePC">Москва, Нижний Сусальный пер. 5с17</a>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomSection}>
                    <a href="/" className={styles.bottomItem}>Style Service</a>
                </div>
                <div className={classnames(styles.bottomSection, styles.bottomSectionCenter)}>
                    <a href="https://www.facebook.com/spin4sale/" className={styles.bottomItem}>Facebook</a>
                    <a href="https://www.instagram.com/spin4spin/" className={styles.bottomItem}>Instagram</a>
                    <a href="https://vk.com/spin4spin" className={styles.bottomItem}>Vkontakte</a>
                    <a href="https://t.me/spin4spin" className={styles.bottomItem}>Telegram</a>
                </div>
                <div className={styles.bottomSection}>
                    <a href="/" className={styles.bottomItem}>Химчистка</a>
                    <a href="/" className={styles.bottomItem}>Распродажа</a>
                </div>
            </div>
        </div>
    </footer>);
};

export default Footer;