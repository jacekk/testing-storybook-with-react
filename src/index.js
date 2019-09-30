import React from "react";
import ReactDOM from "react-dom";

import { Bar } from "./components/Bar";
import { Foo } from "./components/Foo";

import "./styles.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        Hello
        {this.props.name}
        <Foo />
        <Bar uno={1} dos={2} />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
