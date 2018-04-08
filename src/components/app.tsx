import RootStore from "classes/root-store";
let DevTools: any;
if (process.env.NODE_ENV !== "production") {
  // tslint:disable-next-line:no-var-requires
  DevTools = require("mobx-react-devtools").default;
}
import React from "react";
import Example from "./example";

interface IAppProps {
  store: RootStore;
}

export default class App extends React.Component<IAppProps> {
  public render() {
    const store = this.props.store;
    return (
      <div id="app">
        <Example store={store.exampleStore}/>
        {process.env.NODE_ENV !== "production" ? <DevTools /> : null}
      </div>
    );
  }
}
