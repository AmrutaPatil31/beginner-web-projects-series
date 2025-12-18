console.log(React);
console.log(ReactDOM);


import hero from "./app.js";
import test from "./test.js";

console.log(hero());
console.log(test());

console.log("*********************************************************************");



// Box component
const Box = React.createElement(
  "div",
  { className: "Box" },
  "Box"
);

// Circle component
const Circle = React.createElement(
  "div",
  { className: "circle" },
  "Circle"
);

// Parent container
const Container = React.createElement(
  "div",
  { className: "parent" },
  [Box, Circle]
);

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Container);
