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
  #FOOLDAL;

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
    this.#FOOLDAL = $(".foOldal");

    new Tartalom(this.#TARTALOM, TOYS);
    new Kosar(this.#KOSAR, KOSAR_LISTA);
  };

  initEsemenyek = () => {
    this.esemenyKezelo("kosarbaRak", this.#MODEL.kosarhozAd);
    this.esemenyKezelo("kosarbolTorles", this.#MODEL.kosarbolTorol);
    this.esemenyKezelo("kosarNovel", this.#MODEL.kosarhozAd);
    this.esemenyKezelo("kosarCsokkent", this.#MODEL.kosarCsokkent);

    this.adminOldalKlikk();
    this.termekOldalKlikk();
  };

  esemenyKezelo = (esemeny, esemenyEljaras) => {
    $(window).on(esemeny, (event) => {
      esemenyEljaras(event.detail);
      new Kosar(this.#KOSAR, KOSAR_LISTA);
    });
  };

  adminOldalKlikk() {
    this.#ADMIN_LINK.on("click", () => {
      this.#FOOLDAL.html("Admin");
    });
  }

  termekOldalKlikk() {
    this.#TERMEKEK_LINK.on("click", () => {
      this.#FOOLDAL.html(
        `<div class="tartalom row col-lg-7 col-12"></div>
        <div class="col-12 col-lg-5 position-relative border-start border-2">
          <ul class="kosar list-group list-group pt-3"></ul>
        </div>`
      );
      this.initController();
    });
  }
}
