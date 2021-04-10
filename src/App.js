import React from "react";
import { Route, Switch } from "react-router-dom";
import "scss/core.scss";

import { Root, NotFound } from "pages";

const App = () => {
    return (<Switch>
        <Route exact path="/" component={Root} />
        <Route component={NotFound} />
    </Switch>);
};

export default App;