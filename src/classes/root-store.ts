import ExampleStore from "./example-store";

export default class RootStore {
  public exampleStore: ExampleStore;

  constructor() {
    this.exampleStore = new ExampleStore(this);
  }
}
