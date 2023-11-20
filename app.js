import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom';

import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import "./app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));


function App() {
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    ) 
}

root.render(<App/>);