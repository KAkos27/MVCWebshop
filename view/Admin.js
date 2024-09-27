class Admin {
  #FOOLDAL;

  constructor(foOldal) {
    this.#FOOLDAL = foOldal;

    this.adminOldalGeneral();
  }

  adminOldalGeneral = () => {
    this.#FOOLDAL.html("admin");
  };
}

export default Admin;
