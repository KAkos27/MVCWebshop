import { TOYS } from "./data.js";
import { LISTA } from "./kosarLista.js";

class Model {
  constructor() {}

  kosarhozAd = (id) => {
    const targy = TOYS.find((toy) => toy.id === id);
    LISTA.push(targy);
  };
}

export default Model;
