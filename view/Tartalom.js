import Kartya from "./Kartya.js";

export default class Tartalom {
  #szuloElem;
  #TERMEKEK;

  constructor(szuloElem, TERMEKEK) {
    this.#szuloElem = szuloElem;
    this.#TERMEKEK = TERMEKEK;
    this.tartalomGeneral();
  }

  tartalomGeneral() {
    this.#szuloElem.empty();
    for (let index = 0; index < this.#TERMEKEK.length; index++) {
      new Kartya(this.#szuloElem, this.#TERMEKEK[index]);
    }
  }
}
