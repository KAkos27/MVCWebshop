class AdminTablazat {
  #szuloElem;
  #id;
  #cim;
  #leiras;
  #ar;
  #ADMIN_TORLES_GOMB;

  constructor(szuloElem, { id, title, description, price }) {
    this.#szuloElem = szuloElem;
    this.#id = id;
    this.#cim = title;
    this.#leiras = description;
    this.#ar = price;

    this.megjelenit();

    this.#ADMIN_TORLES_GOMB = $(".adminTorol:last");
    this.torlesEsemenyKezelo();
  }

  megjelenit = () => {
    this.#szuloElem.append(`
        <tr>
            <td>${this.#cim}</td>
            <td>${this.#leiras}</td>
            <td>${this.#ar}</td>
            <td>
                <button id=${
                  this.#id
                } class="btn btn-danger adminTorol">🗑️</button>
            </td>
        </tr>
        `);
  };

  torlesEsemenyKezelo() {
    this.#ADMIN_TORLES_GOMB.on("click", () => {
      const e = new CustomEvent("adminTorol", {
        detail: this.#id,
      });
      window.dispatchEvent(e);
    });
  }
}

export default AdminTablazat;
