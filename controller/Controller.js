import Model from "../model/Model.js";
import { TOYS } from "../model/data.js";
import { KOSAR_LISTA } from "../model/kosarLista.js";
import Kosar from "../view/Kosar.js";
import Tartalom from "../view/Tartalom.js";

export default class Controller {
  #TARTALOM;
  #KOSAR;
  #MODEL;

  constructor() {
    this.#MODEL = new Model();
    this.#TARTALOM = $(".tartalom");
    this.#KOSAR = $(".kosar");
    new Tartalom(this.#TARTALOM, TOYS);
    new Kosar(this.#KOSAR, KOSAR_LISTA);
    this.kosarbaRak();
    this.kosarbolTorol();
    this.kosarNovel();
    this.kosarCsokkent();
  }

  kosarbaRak() {
    $(window).on("kosarbaRak", (event) => {
      this.#MODEL.kosarhozAd(event.detail);
      new Kosar(this.#KOSAR, KOSAR_LISTA);
    });
  }

  kosarbolTorol() {
    $(window).on("kosarbolTorles", (event) => {
      this.#MODEL.kosarbolTorol(event.detail);
      new Kosar(this.#KOSAR, KOSAR_LISTA);
    });
  }

  kosarNovel() {
    $(window).on("kosarNovel", (event) => {
      this.#MODEL.kosarhozAd(event.detail);
      new Kosar(this.#KOSAR, KOSAR_LISTA);
    });
  }

  kosarCsokkent() {
    $(window).on("kosarCsokkent", (event) => {
      this.#MODEL.kosarCsokkent(event.detail);
      new Kosar(this.#KOSAR, KOSAR_LISTA);
    });
  }
}
