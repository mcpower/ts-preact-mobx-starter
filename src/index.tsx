import React, { render } from "react-dom";
import App from "./components/app";

if (process.env.NODE_ENV !== "production") {
  // tslint:disable-next-line:no-var-requires
  require("preact/debug");
  if (module.hot) {
    module.hot.accept("./components/app", () => {
      const interopDefault = (m: any) => m && m.default ? m.default : m;
      const ReloadedApp = interopDefault(require("./components/app"));
      render(<ReloadedApp />, document.body);
    });
  }
}

// "rendering into <body> is perfectly fine (encouraged, even)."
render(<App />, document.body);
