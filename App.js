import React from "react";
import ReactDOM from "react-dom/client"



const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement(
            "h1",
            { id: "heading" },
            "Hello My name is Anthony"
        ), React.createElement(
            "h2",
            { id: "heading" },
            "h2 tag"
        )]
    )

)


const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
