import ExampleStore from "classes/example-store";
import { action } from "mobx";
import { inject, observer, Observer } from "mobx-react";
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
        <Observer render={this.getInputBox} />
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

  private getInputBox = () => {
    return <input onChange={this.handleChange} value={this.props.store.inputString} />;
  }

  private getNumberOfDigits = () => {
    return this.props.store.numberOfDigits;
  }

  private getFirstDigitOfNumberOfDigits = () => {
    return this.props.store.firstDigitOfNumberOfDigits;
  }
}
