import React from "react";
import { connect } from "react-redux";
import { authPopUpActions } from "redux/actions"
import { AuthDrop } from "components";


const Drop = ({ setIsHide }) => {
    const handleHideOrShow = () => {
        setIsHide();
    }

    return <AuthDrop
        handleHideOrShow={handleHideOrShow}
    />
};

export default connect(
    ({ authPopUp }) => authPopUp,
    authPopUpActions
)(Drop);