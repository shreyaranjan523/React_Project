import React from "react";
import ReactDOM from "react-dom";


const header = React.createElement("h1", { id:1 }, "Hello using React");
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(header);