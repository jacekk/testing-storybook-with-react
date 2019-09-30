import React from "react";

import { Bar } from "./Bar";

export default {
  title: "Bar"
};

export const noProps = () => <Bar />;

export const someProps = () => <Bar uno={11} dos="22" isPrimary />;
