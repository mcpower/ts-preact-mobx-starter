import React, { render } from "react-dom";
import App from "./components/app";

if (module.hot) {
  require('preact/debug');
  module.hot.accept("./components/app", () => {
    const interopDefault = (m: any) => m && m.default ? m.default : m;
    const App = interopDefault(require("./components/app"));
    render(<App />, document.body);
  });
}

// "rendering into <body> is perfectly fine (encouraged, even)."
render(<App />, document.body);


