import ExampleStore from "classes/example-store";
import { action } from "mobx";
import { inject, observer } from "mobx-react";
import React from "react";
import ObjectObserver from "../object-observer";
import * as style from "./style.css";

interface IExampleProps {
  store: ExampleStore;
}

@observer
export default class Example extends React.Component<IExampleProps> {
  constructor(props: IExampleProps) {
    super(props);
  }

  public render() {
    const store = this.props.store;

    return (
      <div>
        <input onChange={this.handleChange} />
        <div className={style.hello}>Hello world! Some stats:</div>
        <div>Number of digits in string: <ObjectObserver render={this.getNumberOfDigits} /></div>
        <div>First digit of the above: <ObjectObserver render={this.getFirstDigitOfNumberOfDigits} /></div>
      </div>
    );
  }

  @action
  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.store.inputString = e.target.value;
  }

  private getNumberOfDigits = () => {
    return this.props.store.numberOfDigits;
  }

  private getFirstDigitOfNumberOfDigits = () => {
    return this.props.store.firstDigitOfNumberOfDigits;
  }
}
