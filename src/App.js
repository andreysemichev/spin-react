import React from "react";
import { Route, Switch } from "react-router-dom";
import "scss/core.scss";

import { Root, NotFound, Product } from "pages";

const App = () => {
    return (<Switch>
        <Route exact path="/" component={Root} />
        <Route exact path="/p/:id" component={Product} /> 
        <Route component={NotFound} />
    </Switch>);
};

export default App;