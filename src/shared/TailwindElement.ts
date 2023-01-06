import { LitElement, unsafeCSS } from "lit";
import style from "../index.css?inline";

export class TailwindElement extends LitElement {
  static styles = [unsafeCSS(style)];
}
