class SorView {
  #obj;
  #szuloElem;
  #index;
  constructor(obj, szuloElem, index) {
    console.log(obj);
    this.#index = index;
    this.#obj = obj;
    this.#szuloElem = szuloElem;

    this.letrehozz();
    this.input();
  }

  letrehozz() {
    let txt = `<div id=szovegek>`;
    for (let key in this.#obj) {
      if (key == "angol") {
        txt += `<div class="col p-1" id=angol>${this.#obj[key]}</div>`;
        txt += `<div class="col p-1" id=magyar><input id=${this.#index} type="text"></div>`;
        txt += `<div class="col p-1" id=visszajelzes><a class=jo${this.#index} id=jo>✅</a><a class=rossz${this.#index} id=rossz>❌</a></div>`;
      }
    }

    txt += "</div";

    this.#szuloElem.append(txt);
  }

  input() {
    $(`#${this.#index}`).on("change", (event) => {
      event.preventDefault();
      for (let key in this.#obj) {
        if (key == "magyar") {
          if ($(`#${this.#index}`).val() == this.#obj[key]) {
            $(`.jo${this.#index}`).css("display", "inherit");
            $(`.rossz${this.#index}`).css("display", "none");
            this.esemenyTrigger("pontszam");
          } else {
            $(`.jo${this.#index}`).css("display", "none");
            $(`.rossz${this.#index}`).css("display", "inherit");
          }
        }
      }
    });
  }

  esemenyTrigger(esemenyNev) {
    const e = new CustomEvent(esemenyNev);
    window.dispatchEvent(e);
  }
}

export default SorView;
