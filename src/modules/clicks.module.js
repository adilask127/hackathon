import { Module } from "../core/module";

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  trigger() {
    console.log("Метод ClicksModule сработал!");
  }
}
