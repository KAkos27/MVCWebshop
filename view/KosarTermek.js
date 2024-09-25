export default class KosarTermek {
  #szuloElem;
  #id;
  #cim;
  #leiras;
  #ar;
  #kep;
  #db;

  constructor(szuloElem, { id, title, description, price, image, amount }) {
    this.#szuloElem = szuloElem;
    this.#id = id;
    this.#cim = title;
    this.#leiras = description;
    this.#ar = price;
    this.#kep = image;
    this.#db = amount;
    this.megjelenit();
    this.TORLES_ELEM = $(".torles:last");
    this.NOVELES_ELEM = $(".kosarNovel:last");
    this.CSOKKENTES_ELEM = $(".kosarCsokkent:last");
    this.torlesEsemenyKezelo();
    this.novelesEsemenyKezelo();
    this.csokkentesEsemenyKezelo();
  }

  megjelenit() {
    const html = `
    <li
      class="list-group-item d-flex justify-content-between align-items-center gap-2"
    >
      <img src="${this.#kep.src}" alt="${this.#kep.alt}" width="100px" />
      <div class="ms-2 me-auto">
        <div class="fw-bold">${this.#cim}</div>
        <p>${this.#leiras}</p>
      </div>
      <div class="d-flex flex-column gap-5">
        <div class="d-flex align-items-between flex-column gap-2">
          <span class="torles badge text-bg-danger rounded-pill">X</span>
        </div>
        <div class="d-flex align-items-between flex-column gap-2">
          <span class="kosarNovel badge text-bg-secondary rounded-pill">+</span>
          <span class="badge text-dark rounded-pill">${this.#db}</span>
          <span class="kosarCsokkent badge text-bg-secondary rounded-pill">-</span>
        </div>
      </div>
    </li>
    `;
    this.#szuloElem.append(html);
  }

  torlesEsemenyKezelo() {
    this.TORLES_ELEM.on("click", () => {
      const e = new CustomEvent("kosarbolTorles", {
        detail: this.#id,
      });
      window.dispatchEvent(e);
    });
  }

  novelesEsemenyKezelo() {
    this.NOVELES_ELEM.on("click", () => {
      const e = new CustomEvent("kosarNovel", {
        detail: this.#id,
      });
      window.dispatchEvent(e);
    });
  }

  csokkentesEsemenyKezelo() {
    this.CSOKKENTES_ELEM.on("click", () => {
      const e = new CustomEvent("kosarCsokkent", {
        detail: this.#id,
      });
      window.dispatchEvent(e);
    });
  }
}
