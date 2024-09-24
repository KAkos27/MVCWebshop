class Kartya {
  #szuloElem;
  #id;
  #cim;
  #leiras;
  #ar;
  #kep;
  #kategoriak;

  constructor(szuloElem, id, cim, leiras, ar, kep, kategoriak) {
    this.#szuloElem = szuloElem;
    this.#id = id;
    this.#cim = cim;
    this.#leiras = leiras;
    this.#ar = ar;
    this.#kep = kep;
    this.#kategoriak = kategoriak;
    this.kartyaMegjelenit();
  }

  kartyaMegjelenit = () => {
    const html = ``;
    this.#szuloElem.append();
  };
}
