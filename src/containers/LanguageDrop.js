import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { languageActions } from "redux/actions"
import { LanguageDrop } from "components";


const LanguageDropContainer = ({ selected, isLoading, isHide, setIsHide }) => {
    const nodeRefWrapper = useRef(null);
    const nodeRefSub = useRef(null);

    function showOrHide(event) {
        const current = nodeRefSub.current;
        const wrapper = nodeRefWrapper.current;
        const target = event.target;

        if (current) {
            const isAnother = !wrapper.contains(target);
            if (isAnother) {
                setIsHide();
            }
        }
    }
    
    useEffect(() => {
        document.addEventListener("click", showOrHide);

        return () => {
            document.removeEventListener("click", showOrHide);
        };
        // eslint-disable-next-line
    }, []);

    const handleHideOrShow = () => {
        setIsHide();
    }

    const handleSwitchLang = event => {
        const target = event.target;
        const newLang = target.getAttribute("data-lang");
        console.log("Логика переключения языков", newLang)
    }

    return <LanguageDrop
        selected={selected}
        handleHideOrShow={handleHideOrShow}
        isHide={isHide}
        isLoading={isLoading}
        nodeRefSub={nodeRefSub}
        nodeRefWrapper={nodeRefWrapper}
        handleSwitchLang={handleSwitchLang}
    />
};

export default connect(
    ({ language }) => language,
    languageActions
)(LanguageDropContainer);