export const AMDIN_HTML_STRING = `
<div class="admin-valtozo">
          <div class="container-fluid py-3 px-5 mb-3 bg-white border-bottom">
            <div class="row m-0 d-flex align-items-center">
              <h2 class="col-6 col-md-4 display-3 px-5">Admin</h2>
            </div>
          </div>
          <div
            id="admin-form"
            class="container bg-white border py-3 mx-3 mx-auto"
            style="width: 40%"
          >
            <h2 class="display-6 border-bottom mb-3 px-2">Adatok</h2>

            <form class="was-validated">
              <div class="container">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default"
                    >Elnevezés</span
                  >
                  <input
                    id="tipus"
                    type="text"
                    class="elnevezesInput form-control"
                    placeholder="TPR-csont kötéllel"
                    pattern=".{3,}"
                    required=""
                  />
                  <div class="valid-feedback">Hozzáadható.</div>
                  <div class="invalid-feedback">Legalább 3 karakter.</div>
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text">Leírás</span>
                  <textarea
                    class="leirasInput form-control"
                    aria-label="With textarea"
                    minlength="10"
                    maxlength="200"
                    required=""
                    style="max-height: 120px"
                  ></textarea>
                  <div class="valid-feedback">Hozzáadható.</div>
                  <div class="invalid-feedback">Legalább 10 karakter.</div>
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default"
                    >Ár</span
                  >
                  <input
                    id="ar"
                    type="number"
                    min="0"
                    max="100000"
                    value="5000"
                    class="arInput form-control"
                    required=""
                  />
                  <span class="input-group-text" id="inputGroup-sizing-default"
                    >Ft</span
                  >
                  <div class="valid-feedback">Hozzáadható.</div>
                  <div class="invalid-feedback">Elvárt érték: 0 - 100000.</div>
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default"
                    >Kép</span
                  >
                  <input
                    id="kep"
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    value="kepek/t4.jpg"
                    disabled=""
                  />
                </div>
              </div>

              <div class="container pt-3">
                <button
                  type="submit"
                  id="submitTablazat"
                  class="hozzaAdGomb btn btn-secondary"
                >
                  Hozzáadás
                </button>
              </div>
            </form>
          </div>
          <div id="admin-tablazat" class="bg-light container-fluid py-3 w-75">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Elnevezés</th>
                    <th>Leírás</th>
                    <th>Ár</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="adminTablazatBody">
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
`;
