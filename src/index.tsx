import RootStore from "classes/root-store";
import App from "components/app";
import { configure } from "mobx";
import React, { render } from "react-dom";

const rootStore = new RootStore();

configure({
  enforceActions: true,
});

if (process.env.NODE_ENV !== "production") {
  require("preact/debug");
  (window as any).runInAction = require("mobx").runInAction;
  (window as any).rootStore = rootStore;
  if (module.hot) {
    module.hot.accept("./components/app", () => {
      const ReloadedApp = require("./components/app").default;
      render(<ReloadedApp store={rootStore} />, document.body);
    });
  }
}

// "rendering into <body> is perfectly fine (encouraged, even)."
render(<App store={rootStore} />, document.body);
