import SorView from "./SorView.js";

class View {
  list;
  #szuloElem;
  #szoveg;

  constructor(list, szuloElem) {
    this.list = list;
    this.#szuloElem = szuloElem;
    console.log(this.list);

    this.#szuloElem.append(`<div id=fejlec></div>`);
    this.#szuloElem.append(`<div id=szoveg></div>`);
    let fejlec = szuloElem.children("#fejlec");
    this.#szoveg = szuloElem.children("#szoveg");
    fejlec.append(`<div class="col" p-2 id=fejlecek><h5>ANGOL</h5></div>`);
    fejlec.append(`<div class="col" p-2 id=fejlecek><h5>MAGYAR</h5></div>`);
    fejlec.append(`<div class="col" p-2 id=fejlecek><a>visszajelzes<a></div>`);

    for (let i = 0; i < this.list.length; i++) {
        new SorView(this.list[i], this.#szoveg, i);
        
    }
    /*
    this.gomb.on("click", (event) => {
      event.preventDefault();

      this.esemenyTrigger("esemenyNev");
    });
    */
  }

  /*
    esemenyTrigger(esemenyNev) {
        const e = new CustomEvent(esemenyNev, { detail: this.#adatok });
        window.dispatchEvent(e);
    }
    */
}

export default View;
