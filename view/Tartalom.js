import Kartya from "./Kartya.js";

export default class Tartalom {
  #foOldal;
  #szuloElem;
  #TERMEKEK;

  constructor(foOldal, szuloElem, TERMEKEK) {
    this.#foOldal = foOldal;
    this.#szuloElem = szuloElem;
    this.#TERMEKEK = TERMEKEK;

    this.foOldalGeneral();
    this.tartalomGeneral();
  }

  foOldalGeneral = () => {
    this.#foOldal.html(
      `<div class="tartalom row col-lg-7 col-12"></div>
      <div class="col-12 col-lg-5 position-relative border-start border-2">
        <ul class="kosar list-group list-group pt-3"></ul>
      </div>`
    );
  };

  tartalomGeneral() {
    this.#szuloElem.empty();
    for (let index = 0; index < this.#TERMEKEK.length; index++) {
      new Kartya(this.#szuloElem, this.#TERMEKEK[index]);
    }
  }
}
