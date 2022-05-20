"use strick";

function Hello(props) {
  return React.createElement(
    "div",
    null,
    "Hello ",
    props.toWhat
  );
}

ReactDOM.render(React.createElement(Hello, { toWhat: "World" }), document.getElementById("root"));