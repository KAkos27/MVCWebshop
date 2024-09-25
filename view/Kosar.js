import KosarTermek from "./KosarTermek.js";

export default class Kosar {
  #szuloElem;
  #TERMEK;
  constructor(szuloElem, TERMEK) {
    this.#szuloElem = szuloElem;
    this.#TERMEK = TERMEK;
    this.kosarGeneral();
  }

  kosarGeneral() {
    this.#szuloElem.empty();
    if (this.#TERMEK.length) {
      let vegosszeg = 0;
      for (let index = 0; index < this.#TERMEK.length; index++) {
        new KosarTermek(this.#szuloElem, this.#TERMEK[index]);
        vegosszeg += this.#TERMEK[index].amount * this.#TERMEK[index].price;
      }
      this.#szuloElem.append(`<li>${vegosszeg} Ft</li>`);
    } else {
      this.#szuloElem.html("A kosár üres");
    }
  }
}
