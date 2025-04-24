# React Concepts

# --------------------------------------EPISODE-01----------------------------------------

# Parcel

- Dev build
- Local Server
- HMR Hot Model Replacement - lets you update parts of your web app instantly without refreshing the whole page.
- Uses File watching algorithms = written in C++
- Caching - Faster builts = Instead of rebuilding everything from scratch, the tool reuses the cached parts.
- Do Image Optimization
- Minification
- It also bundles the files
- It also compresses the files
- Consistent Hashing = Parcel uses to give your files a unique name based on their content — and only change it when the content actually changes.
- Differential Bundling = Parcel creates different versions of your JavaScript code depending on the browser's capabilities — so new browsers get modern code, and older browsers get compatible code.

- Tree shaking = It means it removes the unused code

# ----------------------------------EPISODE-02--------------------------------------------------

# In ReactCore Concept we use:-

# const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

# const root = ReactDOM.createRoot(document.getElementById("root));

# root.render(heading);

In the output it will show -------- Namaste React

NOTE:- But if we have lots of components heading paragraph so it is difficult to write all this syntax for every tags and components . So to make it easier React Teams introduced the concept ------> JSX

NOTE:- React is different and JSX is different . Dont mismatch them
NOTE:- JSX is not html , JSX is html like Syntax

# const heading = <h1 id="heading">Namaste React</h1> --------------This is JSX Syntax

NOTE:- This is not read by Javascript Engine. But it is rendering in the browser with the help of Babel

What is Babel?
=> It basically taked your JSX converts that code that browser or JS Engine understand . It is Beast

JSX =====> Babel Converts ====> React.createElement =====> ReactElement-JS Object ====> HTML Element(render)

# const heading = <h1 className="head"> Namaste React </h1>

NOTE:- Here we do not give class = "head" . In JSX we have to give className.If we want to give attribute to JSX always use camelCase.

# React Components

//Class Based Component ---> Old
//Function Based Component -----> New

# React Functional Components -----> A function which is returning a react element it becomes a functional components. A normal Javascript function

# How to render a functional component to root.render();

=====>
const HeadingComponent = () => {
return <h1> Namaste React from Functional Components </h1>
}

root.render(<HeadingComponent />); =====> This is the syntax

# Component Composition:-

When we put 1 Component into another Component is known as Component Composition
Example:-

// const Title = () => (

<h1 className="Title"> This is a Title </h1>
);

// const Heading = () => (

<Title /> -------- Component Composition
<h1 className="Head"> This is a Heading</h1>

);

# We can put any javascript code inside JSX. But we have to write javascript code inside the curly braces - {}

# For example :-

const number = 10000
// const Heading = () => (
{ 100 + 200} --------> This is javascript code
{number} -------------> This is javascript code

<h1 className="Head"> This is a Heading </h1>
);

\*\* Output :- 300

# NOTE:- Suppose if we are fetching some data through api and attackers are injecting some malicious data in that api so it does not affect our app because inside our component JSX will sanitize our data automatically for free also we does not care about it.
