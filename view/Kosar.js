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
      this.#szuloElem
        .append(`<li class="list-group-item d-flex align-items-center gap-2 p-3">
              <div class="fw-bold">Fizetendő:</div>
              <p class="m-0">${vegosszeg} Ft</p>
            </li>`);
    } else {
      this.#szuloElem.html(`<div
        class="ures-kosar d-flex justify-content-center align-items-center position-fixed top-50 flex-column"
        style="right: 17%"
      >
        <h2>A kosár üres!</h2>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
            />
          </svg>
        </div>
      </div>`);
    }
  }
}
