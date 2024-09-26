import Model from "../model/Model.js";
import { TOYS } from "../model/data.js";
import { KOSAR_LISTA } from "../model/kosarLista.js";
import Kosar from "../view/Kosar.js";
import Tartalom from "../view/Tartalom.js";

export default class Controller {
  #TARTALOM;
  #KOSAR;
  #MODEL;
  #ADMIN_LINK;
  #TERMEKEK_LINK;

  constructor() {
    this.initController();
    this.initEsemenyek();
  }

  initController = () => {
    this.#MODEL = new Model();
    this.#TARTALOM = $(".tartalom");
    this.#KOSAR = $(".kosar");
    this.#ADMIN_LINK = $(".adminOldal");
    this.#TERMEKEK_LINK = $(".termekOldal");

    new Tartalom(this.#TARTALOM, TOYS);
    new Kosar(this.#KOSAR, KOSAR_LISTA);
  };

  initEsemenyek = () => {
    this.kosarbaRak();
    this.kosarbolTorol();
    this.kosarNovel();
    this.kosarCsokkent();
    this.adminOldalKlikk();
    this.termekOldalKlikk();
  };

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

  adminOldalKlikk() {
    this.#ADMIN_LINK.on("click", () => {
      $(".foOldal").html("Admin");
    });
  }

  termekOldalKlikk() {
    this.#TERMEKEK_LINK.on("click", () => {
      $(".foOldal").html(
        `<div class="tartalom row col-lg-7 col-12"></div>
        <div class="col-12 col-lg-5 position-relative border-start border-2">
          <ul class="kosar list-group list-group pt-3"></ul>
        </div>`
      );
      this.initController();
    });
  }
}
