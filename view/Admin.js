import { AMDIN_HTML_STRING } from "./adminHtmlString.js";
import { TOYS } from "../model/data.js";
import AdminTablazat from "./AdminTablazat.js";

class Admin {
  #FOOLDAL;
  #ADMIN_HTML;
  #TABLAZAT_SZULOELEM;
  #ADMIN_HOZZA_AD;

  #cim;
  #leiras;
  #ar;

  constructor(foOldal) {
    this.#FOOLDAL = foOldal;
    this.#ADMIN_HTML = AMDIN_HTML_STRING;

    this.adminOldalGeneral();

    this.#TABLAZAT_SZULOELEM = $(".adminTablazatBody");
    this.#ADMIN_HOZZA_AD = $(".hozzaAdGomb");
    this.#cim = $(".elnevezesInput");
    this.#leiras = $(".leirasInput");
    this.#ar = $(".arInput");

    this.tablazatGeneral();
    this.hozzaAdEsemenykezelo();
  }

  adminOldalGeneral = () => {
    this.#FOOLDAL.html(this.#ADMIN_HTML);
  };

  tablazatGeneral = () => {
    TOYS.forEach((jatek) => {
      new AdminTablazat(this.#TABLAZAT_SZULOELEM, jatek);
    });
  };

  hozzaAdEsemenykezelo() {
    this.#ADMIN_HOZZA_AD.on("click", () => {
      const e = new CustomEvent("adminHozzaAd", {
        detail: {
          id: Math.random(),
          image: { src: "kepek/t4.jpg", alt: this.#cim.val() },
          amount: 1,
          title: this.#cim.val(),
          description: this.#leiras.val(),
          price: this.#ar.val(),
        },
      });
      window.dispatchEvent(e);
    });
  }
}

export default Admin;
