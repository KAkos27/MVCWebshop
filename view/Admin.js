import { AMDIN_HTML_STRING } from "./adminHtmlString.js";
import { TOYS } from "../model/data.js";
import AdminTablazat from "./AdminTablazat.js";

class Admin {
  #FOOLDAL;
  #ADMIN_HTML;
  #TABLAZAT_SZULOELEM;

  constructor(foOldal) {
    this.#FOOLDAL = foOldal;
    this.#ADMIN_HTML = AMDIN_HTML_STRING;

    this.adminOldalGeneral();
    this.#TABLAZAT_SZULOELEM = $(".adminTablazatBody");
    this.tablazatGeneral();
  }

  adminOldalGeneral = () => {
    this.#FOOLDAL.html(this.#ADMIN_HTML);
  };

  tablazatGeneral = () => {
    TOYS.forEach((jatek) => {
      new AdminTablazat(this.#TABLAZAT_SZULOELEM, jatek);
    });
  };
}

export default Admin;
