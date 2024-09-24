import Kartya from "./Kartya.js";

export default class Tartalom {
  #szuloElem;
  #TERMEKEK;

  constructor(szuloElem, TERMEKEK) {
    this.#szuloElem = szuloElem;
    this.#TERMEKEK = TERMEKEK;
    this.tartalomGeneral();
    console.log(this.#TERMEKEK);
  }

  tartalomGeneral() {
    this.#szuloElem.empty();
    for (let index = 0; index < this.#TERMEKEK.length; index++) {
      new Kartya(
        this.#szuloElem,
        this.#TERMEKEK[index].id,
        this.#TERMEKEK[index].title,
        this.#TERMEKEK[index].description,
        this.#TERMEKEK[index].price,
        this.#TERMEKEK[index].image
      );
    }
  }
}
