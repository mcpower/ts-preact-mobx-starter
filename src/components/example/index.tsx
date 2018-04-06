import ExampleStore from "classes/example-store";
import * as mobx from "mobx";
import { inject, observer, Observer } from "mobx-react";
import React from "react";
import * as style from "./style.css";

interface IExampleProps {
  store: ExampleStore;
}

@observer
export default class Example extends React.Component<IExampleProps> {
  constructor(props: IExampleProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  public render() {
    const store = this.props.store;

    return (
      <div>
        <input onChange={this.handleChange} />
        <div className={style.hello}>Hello world! Some stats:</div>
        <div>Number of digits in string: <Observer>{() => store.numberOfDigits}</Observer></div>
        <div>First digit of the above: <Observer>{() => store.firstDigitOfNumberOfDigits}</Observer></div>
      </div>
    );
  }

  public handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.store.inputString = e.target.value;
  }
}
