import { TOYS } from "./data.js";
import { KOSAR_LISTA } from "./kosarLista.js";

class Model {
  constructor() {}

  kosarhozAd = (id) => {
    const targy = TOYS.find((toy) => toy.id === id);

    if (!KOSAR_LISTA.includes(targy)) {
      targy.amount = 1;
      KOSAR_LISTA.push(targy);
    } else {
      const index = KOSAR_LISTA.findIndex((toy) => toy.id === id);
      KOSAR_LISTA[index].amount++;
    }
  };

  kosarbolTorol = (id) => {
    const ujKosar = KOSAR_LISTA.filter((toy) => toy.id !== id);
    KOSAR_LISTA.length = 0;

    ujKosar.forEach((kosarTargy) => {
      KOSAR_LISTA.push(kosarTargy);
    });
  };

  kosarCsokkent = (id) => {
    const index = KOSAR_LISTA.findIndex((toy) => toy.id === id);

    if (KOSAR_LISTA[index].amount > 1) {
      KOSAR_LISTA[index].amount--;
    } else {
      this.kosarbolTorol(id);
    }
  };
}

export default Model;
