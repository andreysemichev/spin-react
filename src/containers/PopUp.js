import React, { useRef } from "react";
import { connect } from "react-redux";
import { signInActions } from "redux/actions"
import { AuthPopUp } from "components";
import Validate from "utils/validate";


const PopUp = ({ email, password, rememberMe, isLoading, isHide, errors, setIsHide, setEmail, setPassword, setRememberMe, setErrors }) => {
    const nodeRefContent = useRef(null);

    const hide = event => {
        const content = nodeRefContent.current;
        const target = event.target;
        const isAnother = !content.contains(target);

        if (isAnother) {
            setIsHide();
        }
    }

    const handleHideOrShow = () => {
        setIsHide();
    }

    const handleUpdateEmail = event => {
        const value = event.target.value;
        setEmail(value);
    }

    const handleUpdatePassword = event => {
        const value = event.target.value;
        setPassword(value);
    }

    const handleRememberMe = () => {
        setRememberMe();
    }

    const handleBlurEmail = () => {
        const emailInfo = Validate.email(email);
        const wrapper = {...errors};
        
        if (!emailInfo.isValid) {
            wrapper.email = emailInfo.msg;
        } else {
            wrapper.email = null;
        }

        setErrors(wrapper);
    }

    const handleBlurPassword = () => {
        const passwordInfo = Validate.password(password);
        const wrapper = {...errors};
        
        if (!passwordInfo.isValid) {
            wrapper.password = passwordInfo.msg;
        } else {
            wrapper.password = null;
        }

        setErrors(wrapper);
    }

    const auth = () => {
        const emailInfo = Validate.email(email);
        const passwordInfo = Validate.password(password);
        const wrapper = {...errors};
        
        if (!emailInfo.isValid) {
            wrapper.email = emailInfo.msg;
        } else {
            wrapper.email = null;
        }

        if (!passwordInfo.isValid) {
            wrapper.password = passwordInfo.msg
        } else {
            wrapper.password = null;
        }

        setErrors(wrapper);

        console.log("auth...")
    }

    return <AuthPopUp
        hide={hide}
        nodeRefContent={nodeRefContent}
        email={email}
        password={password}
        rememberMe={rememberMe}
        isLoading={isLoading}
        isHide={isHide}
        errors={errors}
        handleUpdateEmail={handleUpdateEmail}
        handleUpdatePassword={handleUpdatePassword}
        handleHideOrShow={handleHideOrShow}
        handleRememberMe={handleRememberMe}
        handleBlurEmail={handleBlurEmail}
        handleBlurPassword={handleBlurPassword}
        auth={auth}
    />
};

export default connect(
    ({ signIn }) => signIn,
    signInActions
)(PopUp);