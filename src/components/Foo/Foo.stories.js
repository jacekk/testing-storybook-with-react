import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number } from "@storybook/addon-knobs";

import { Foo } from "./Foo";

const stories = storiesOf("Foo", module);

stories.addDecorator(withKnobs);

stories.add("no props", () => <Foo />);

stories.add("with height", () => {
  const height = number("height", 30);

  return <Foo height={height} />;
});

stories.add("with string height", () => {
  const height = text("height", "40");

  return <Foo height={height} />;
});
