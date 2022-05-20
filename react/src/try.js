"use strick";
function Hello(props) {
  return <div>Hello {props.toWhat}</div>;
}

ReactDOM.render(<Hello toWhat="World" />, document.getElementById("root"));
