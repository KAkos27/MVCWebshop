import { TOYS } from "./data.js";
import { KOSAR_LISTA } from "./kosarLista.js";

class Model {
  #JATEKOK;
  #KOSAR;

  constructor() {
    this.#JATEKOK = TOYS;
    this.#KOSAR = KOSAR_LISTA;
  }

  kosarhozAd = (id) => {
    const targy = this.#JATEKOK.find((toy) => toy.id === id);

    if (!this.#KOSAR.includes(targy)) {
      targy.amount = 1;
      this.#KOSAR.push(targy);
    } else {
      const index = this.#KOSAR.findIndex((toy) => toy.id === id);
      this.#KOSAR[index].amount++;
    }
  };

  kosarbolTorol = (id) => {
    const ujKosar = this.#KOSAR.filter((toy) => toy.id !== id);
    this.#KOSAR.length = 0;

    ujKosar.forEach((kosarTargy) => {
      this.#KOSAR.push(kosarTargy);
    });
  };

  adminTorol = (id) => {
    const ujLista = this.#JATEKOK.filter((toy) => toy.id !== id);
    this.#JATEKOK.length = 0;

    ujLista.forEach((listaElem) => {
      this.#JATEKOK.push(listaElem);
    });
  };

  adminUjTermek = (termek) => {
    this.#JATEKOK.push(termek);
  };

  kosarCsokkent = (id) => {
    const index = this.#KOSAR.findIndex((toy) => toy.id === id);

    if (this.#KOSAR[index].amount > 1) {
      this.#KOSAR[index].amount--;
    } else {
      this.kosarbolTorol(id);
    }
  };
}

export default Model;
