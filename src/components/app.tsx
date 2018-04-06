import RootStore from "classes/root-store";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import React from "react";
import Example from "./example";

interface IAppProps {
  store: RootStore;
}

@observer
export default class App extends React.Component<IAppProps> {
  public render() {
    const store = this.props.store;
    return (
      <div id="app">
        <Example store={store.exampleStore}/>
        {process.env.NODE_ENV === "development" ? <DevTools /> : null}
      </div>
    );
  }
}
