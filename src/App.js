import React from "react";
import { Route, Switch } from "react-router-dom";
import "scss/core.scss";

import { Root, NotFound, Product, Catalog } from "pages";

// TODO
// надо все рефакторить, но после настройки основных моментов

const App = () => {
    return (<Switch>
        <Route exact path="/" component={Root} />
        <Route exact path="/p/:id" component={Product} /> 
        <Route exact path={["/c/wear", "/c/shoes", "/c/accessories","/c/new" ]} component={Catalog} /> 
        <Route component={NotFound} />
    </Switch>);
};

export default App;