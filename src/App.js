import React from "react";
import { Route, Switch } from "react-router-dom";
import "scss/core.scss";

import { Root, NotFound, Product, Catalog } from "pages";

const App = () => {
    return (<Switch>
        <Route exact path="/" component={Root} />
        <Route exact path="/p/:id" component={Product} /> 
        <Route exact path={["/c/wear/:filter", "/c/shoes/:filter", "/c/accessories/:filter"]} component={Catalog} /> 
        <Route component={NotFound} />
    </Switch>);
};

export default App;