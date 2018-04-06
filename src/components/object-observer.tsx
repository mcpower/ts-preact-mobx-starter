import { observer } from "mobx-react";
import React from "react";

const ObjectObserver = observer(({ render }) => <span>{render()}</span>);
export default ObjectObserver;
