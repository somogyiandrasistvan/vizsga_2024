class TemaView {
  #list;
  #szuloElem;
  #select;

  constructor(list, szuloElem) {
    this.#list = list;
    this.#szuloElem = szuloElem;

    this.letrehozz();
    this.kattint();
  }

  letrehozz() {
    let txt = "";
    txt += `<select id="temaSelect" name="temaSelect">`;
    txt += `<option value=0> -- válasz témát --</option>`;
    for (let key in this.#list) {
      txt += `<option value=${this.#list[key].id}>${
        this.#list[key].temanev
      }</option>`;
    }
    txt += "</select>";

    this.#szuloElem.append(txt);
  }

  kattint() {
    $("#temaSelect").on("change", (event) => {
      this.#select = $("#temaSelect").val();
      this.esemenyTrigger("select");
    });
  }

  esemenyTrigger(esemenyNev) {
    const e = new CustomEvent(esemenyNev, { detail: this.#select });
    window.dispatchEvent(e);
  }
}

export default TemaView;
