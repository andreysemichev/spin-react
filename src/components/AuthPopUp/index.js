import React from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { CheckBox } from "components";
import styles from "./styles.module.scss";
import logo from "assets/img/logo_white.svg";

const PopUp = ({
    nodeRefContent,
    hide,
    email,
    password,
    rememberMe,
    isLoading,
    isHide,
    errors,
    handleUpdateEmail,
    handleUpdatePassword,
    handleHideOrShow,
    handleRememberMe,
    handleBlurEmail,
    handleBlurPassword,
    auth
}) => {
    if (isHide) {
        return <></>;
    }

    return (<div className={styles.popUp} onClick={hide}>
        <div className={styles.content} ref={nodeRefContent}>
            <div className={styles.top}>
                <img src={logo} alt="Spin 4 Spin" />
                <div className={styles.close} onClick={handleHideOrShow}>&times;</div>
            </div>
            <div className={styles.middle}>
                <label className={styles.middleField}>
                    <div className={styles.middleTxt}>E-mail <span className={styles.necessarily} /></div>
                    <input type="email" value={email} onChange={handleUpdateEmail} onBlur={handleBlurEmail} />
                    <div />
                    <div className={styles.error}>{errors.email && errors.email}</div>
                </label>
                <label className={styles.middleField}>
                    <div className={styles.middleTxt}>Пароль <span className={styles.necessarily} /></div>
                    <input type="password" value={password} onChange={handleUpdatePassword} onBlur={handleBlurPassword} />
                    <div />
                    <div className={styles.error}>{errors.password && errors.password}</div>
                </label>
                <label className={classnames(styles.middleField, styles.forgot)}>
                    <div />
                    <div>
                        <NavLink to="/">Забыли пароль</NavLink>
                    </div>
                </label>
                <label className={classnames(styles.middleField, styles.remember)} onClick={handleRememberMe}>
                    <CheckBox text="Запомнить меня" isCheck={rememberMe} />
                </label>
            </div>
            {/* <div className={styles.socialNetworks}>
                <div className={styles.socialNetworksTxt}>Войти через соц. сеть</div>
                <div className={styles.socialNetworksIcons}>иконки_соц_сетей</div>
            </div> */}
            <div className={styles.auth}>
                <div className={styles.authIn} onClick={auth}>Войти</div>
                <div className={styles.authUp}>Создать учетную запись</div>
                <div className={styles.error}>{errors.account && errors.account}</div>
            </div>
        </div>
    </div>);
}

export default PopUp;