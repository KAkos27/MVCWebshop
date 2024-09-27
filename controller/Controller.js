import Model from "../model/Model.js";
import { TOYS } from "../model/data.js";
import { KOSAR_LISTA } from "../model/kosarLista.js";
import Admin from "../view/Admin.js";
import Kosar from "../view/Kosar.js";
import Tartalom from "../view/Tartalom.js";

export default class Controller {
  #TARTALOM;
  #TARTALOM_PELDANY;
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
    this.#ADMIN_LINK = $(".adminOldal");
    this.#TERMEKEK_LINK = $(".termekOldal");
    this.#FOOLDAL = $(".foOldal");

    new Tartalom(this.#TARTALOM, this.#TARTALOM, TOYS);

    this.#KOSAR = $(".kosar");
    new Kosar(this.#KOSAR, KOSAR_LISTA);
  };

  initEsemenyek = () => {
    this.esemenyKezelo("kosarbaRak", this.#MODEL.kosarhozAd);
    this.esemenyKezelo("kosarbolTorles", this.#MODEL.kosarbolTorol);
    this.esemenyKezelo("kosarNovel", this.#MODEL.kosarhozAd);
    this.esemenyKezelo("kosarCsokkent", this.#MODEL.kosarCsokkent);

    this.adminOldalKlikk();
    this.termekOldalKlikk();
    this.adminTorol();
    this.adminHozzaAd();
  };

  esemenyKezelo = (esemeny, esemenyEljaras) => {
    $(window).on(esemeny, (event) => {
      esemenyEljaras(event.detail);
      new Kosar(this.#KOSAR, KOSAR_LISTA);
    });
  };

  adminOldalKlikk() {
    this.#ADMIN_LINK.on("click", () => {
      new Admin(this.#FOOLDAL);
    });
  }

  termekOldalKlikk() {
    this.#TERMEKEK_LINK.on("click", () => {
      new Tartalom(this.#FOOLDAL, this.#TARTALOM, TOYS);
      this.initController();
    });
  }

  adminTorol = () => {
    $(window).on("adminTorol", (event) => {
      this.#MODEL.adminTorol(event.detail);
      new Admin(this.#FOOLDAL);
    });
  };

  adminHozzaAd = () => {
    $(window).on("adminHozzaAd", (event) => {
      event.preventDefault();
      this.#MODEL.adminUjTermek(event.detail);
      new Admin(this.#FOOLDAL);
    });
  };
}
