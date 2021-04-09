import React from "react";
import arrow from "assets/img/arrow.svg";
import styles from "./styles.module.scss";
import russia from "assets/img/russia.png";
import unitedStates from "assets/img/united-states.svg";

const LanguageDrop = ({ selected, isHide, handleHideOrShow, nodeRefWrapper, nodeRefSub, handleSwitchLang }) => {
    return(<div className={styles.drop} ref={nodeRefWrapper}>
        <div className={styles.wrapper} onClick={handleHideOrShow}>
            { selected === "ru" && <img src={russia} alt="icon" /> }
            { selected === "us" && <img src={unitedStates} alt="icon" /> }
            <img className={isHide? styles.arrowDown : styles.arrowUp} src={arrow} alt="icon" />
        </div>
        { !isHide &&
            <div className={styles.items} ref={nodeRefSub}>
                <div className={styles.item} data-lang="ru" onClick={handleSwitchLang}>
                    <img src={russia} alt="icon" /> Русский
                </div>
                <div className={styles.item} data-lang="us" onClick={handleSwitchLang}>
                    <img src={unitedStates} alt="icon" /> English
                </div>
            </div> }
        
    </div>);
};

export default LanguageDrop;