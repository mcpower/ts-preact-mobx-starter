import React from "react";
import * as style from "./style.css";

export default class Example extends React.Component<{}, {}> {
  public render() {
    return <div className={style.hello}>Hello world!</div>;
  }
}
