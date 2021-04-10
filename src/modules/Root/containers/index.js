import React, { useEffect } from "react";
import { connect } from "react-redux";
import { rootActions } from "redux/actions"
import Root from "../components";

const RootContainer = ({ html, isLoading, fetchHtml }) => {
    useEffect(() => {
        if (html === null) {
            fetchHtml();
        }
        // eslint-disable-next-line
    }, [html]);

    return <Root
        html={html}
    />
};

export default connect(
    ({ root }) => root,
    rootActions
)(RootContainer);