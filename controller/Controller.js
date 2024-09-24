// import Modell from "../modell/Modell.js";
import { TOYS } from "../model/data.js";
import Tartalom from "../view/Tartalom.js";

export default class Controller {
  #TARTALOM;
  #MODEL;
  constructor() {
    // this.#MODEL = new Model();
    this.#TARTALOM = $(".tartalom");
    new Tartalom(this.#TARTALOM, TOYS);
    this.kosarbaRak();
  }

  kosarbaRak() {
    $(window).on("kosarbaRak", (event) => {
      console.log(event.detail);
    });
  }
}
