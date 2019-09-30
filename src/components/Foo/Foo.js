import React from "react";

export const Foo = props => (
  <div
    style={{
      background: "darkred",
      color: "white",
      height: `${props.height}px`,
      padding: "10px 6px"
    }}
  >
    Foo --> {JSON.stringify(props)}
  </div>
);

Foo.defaultProps = {
  height: 12
};
