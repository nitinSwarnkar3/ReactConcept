import React from "react";
import ReactDOM from "react-dom/client"


//We will not use this React.createElement
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const jsxHeading = <h1 className="head">Namaste react from JSX</h1>


// React Functional Components


const Title = () => (
    <h1 className="Title"> This is a Title Component</h1>
);

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading"> Namaste React Functional Components</h1>
    </div>

);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);


