import { html } from "lit";

import "./imk-button";

export default {
  title: "sample",
};

export const main = () => {
  return html` <imk-button name="감자"><i>옥수수</i></imk-button>`;
};
