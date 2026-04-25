//  const element = React.createElement('h1', null, 'Hello World');
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", null, "I am child 1"),
    React.createElement("h1", null, "I am child 1"),
  ]),
  React.createElement("div", { className: "child" }, "I am child 2"),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
