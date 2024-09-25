class Kartya {
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
    this.kartyaMegjelenit();
    this.GOMB = $(".kosar-gomb:last");
    this.esemenyKezelo();
  }

  kartyaMegjelenit = () => {
    const html = `
    <div class="col-xl-4 col-lg-6 d-flex justify-content-center p-3">
    <div class="card col-3" style="width: 390px; height: fit-content">
        <img class="card-img-top" src="${this.#kep.src}" alt="${this.#kep.alt}">
        <div class="card-body">
            <h4 class="card-title">${this.#cim}</h4>
            <p class="card-text">${this.#leiras}</p>
            <div class="pt-3">
                <div class="row m-0">
                    <button class="btn btn-secondary col-md-4 kosar-gomb" id="${
                      this.#id
                    }">Kosárba</button>
                    <div class="col-md-6 ms-auto d-flex align-items-center p-1">
                        <h5 class="w-100 m-0 p-0 text-end">${this.#ar} Ft</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    `;
    this.#szuloElem.append(html);
  };

  esemenyKezelo() {
    this.GOMB.on("click", () => {
      const e = new CustomEvent("kosarbaRak", {
        detail: this.#id,
      });
      window.dispatchEvent(e);
    });
  }
}

export default Kartya;
