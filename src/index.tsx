import RootStore from "classes/root-store";
import App from "components/app";
import React, { render } from "react-dom";

const rootStore = new RootStore();

if (process.env.NODE_ENV !== "production") {
  // tslint:disable-next-line:no-var-requires
  require("preact/debug");
  if (module.hot) {
    module.hot.accept("./components/app", () => {
      const interopDefault = (m: any) => m && m.default ? m.default : m;
      const ReloadedApp = interopDefault(require("./components/app"));
      render(<ReloadedApp store={rootStore} />, document.body);
    });
  }
}

// "rendering into <body> is perfectly fine (encouraged, even)."
render(<App store={rootStore} />, document.body);
