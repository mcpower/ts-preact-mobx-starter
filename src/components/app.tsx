import RootStore from "classes/root-store";
import { observer } from "mobx-react";
import React from "react";
import Example from "./example";

interface IAppProps {
  store: RootStore;
}

@observer
export default class App extends React.Component<IAppProps> {
  public render() {
    const store = this.props.store;
    return <Example store={store.exampleStore}/>;
  }
}
