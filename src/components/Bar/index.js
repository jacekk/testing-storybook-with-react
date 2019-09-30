import React from "react";

export const Bar = props => (
  <div style={{
      background: "green",
      padding: "10px 6px"
    }}>
    Bar
    {JSON.stringify(props)}
  </div>
);
