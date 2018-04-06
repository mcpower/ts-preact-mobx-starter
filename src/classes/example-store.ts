import { computed, observable } from "mobx";
import RootStore from "./root-store";

export default class ExampleStore {
  public rootStore: RootStore;

  @observable public inputString?: string;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @computed get numberOfDigits(): number {
    if (this.inputString === undefined) {
      return 0;
    }
    return Array.from(this.inputString).filter((c) => /^\d$/.test(c)).length;
  }

  @computed get firstDigitOfNumberOfDigits(): number {
    return +this.numberOfDigits.toString()[0];
  }
}
