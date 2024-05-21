import SorView from "./SorView.js";

class View {

    #list;
    #szuloElem;

    constructor(list, szuloElem) {
        this.#list = list;
        this.#szuloElem = szuloElem;

        /*
        szuloElem.append(`<table class="table table-hover table-bordered table-striped">`);
        this.tablaElem = szuloElem.children("table");
        this.tablaElem.append(`<thead><tr><th></th></tr></thead>`);
        this.tablaElem.append(`<tbody></tbody>`);
        this.tbodyElem=$("tbody")
        this.#lista.forEach((element, index)=> {
            new SorView(element, this.tablaElem, index)
        });

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