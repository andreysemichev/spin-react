import React from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { HeaderTop } from "components";
import { ShoppingBag, WishList, LanguageDrop, Search, AuthPopUp, AuthDrop, Menu } from "containers";
import styles from "./styles.module.scss";
import logo from "assets/img/logo.svg";

const Header = props => {
    return(<header>
        <AuthPopUp />
        <HeaderTop />
        <div className={classnames(styles.headerCenter, styles.container)}>
            <NavLink to="/">
                <img className={styles.logo} src={logo} alt="Spin 4 Spin" />
            </NavLink>
            <div className={styles.right}>
                <LanguageDrop />
                <AuthDrop />
                <WishList />
                <ShoppingBag />
                <NavLink className={styles.rightLink} to="/">Продать</NavLink>
                <Search />
            </div>
        </div>
        <div className={styles.container}>
            <Menu />
        </div>
    </header>);
};

export default Header;