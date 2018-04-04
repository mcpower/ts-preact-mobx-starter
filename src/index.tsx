import React, { render } from "react-dom";
import Example from "./example";

if (module.hot) {
  require('preact/debug');
  module.hot.accept("./example/index.tsx", () => {
    const interopDefault = (m: any) => m && m.default ? m.default : m;
    const Example = interopDefault(require("./example"));
    render(<Example />, document.body);
  });
}

// "rendering into <body> is perfectly fine (encouraged, even)."
render(<Example />, document.body);


