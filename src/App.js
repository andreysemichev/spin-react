import React from "react";
import image from "assets/img/t-shirt.jpg";
import "./App.module.scss";

const App = () => {
    return (<>
        <h1>Hello, World!</h1>
        <img src={image} alt="img" />
    </>);
};

export default App;