export default class KosarTermek {
  #szuloElem;
  #id;
  #cim;
  #leiras;
  #ar;
  #kep;

  constructor(szuloElem, { id, title, description, price, image }) {
    this.#szuloElem = szuloElem;
    this.#id = id;
    this.#cim = title;
    this.#leiras = description;
    this.#ar = price;
    this.#kep = image;
    this.megjelenit();
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
          <span class="badge text-bg-danger rounded-pill">X</span>
        </div>
        <div class="d-flex align-items-between flex-column gap-2">
          <span class="badge text-bg-secondary rounded-pill">+</span>
          <span class="badge text-dark rounded-pill"></span>
          <span class="badge text-bg-secondary rounded-pill">-</span>
        </div>
      </div>
    </li>
    `;
    this.#szuloElem.append(html);
  }
}
