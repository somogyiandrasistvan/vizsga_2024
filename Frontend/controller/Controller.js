import DataService from "../modell/DataService.js";
import HibaView from "../view/HibaView.js";
import TemaView from "../view/TemaView.js";
import View from "../view/View.js";

class Controller {
  #dataService;
  #pontszam = 0;

  constructor() {
    this.init();
  }

  init() {
    this.#dataService = new DataService();
    this.pontszam();

    this.#dataService.getData(
      "api/tema",
      this.megjelenitTema,
      this.hibaMegjelenit
    );

    this.#dataService.getData(
      "api/szavak",
      this.megjelenit,
      this.hibaMegjelenit
    );

    $(window).on("pontszam", (event) => {
      this.#pontszam++;
      $("#pontszam").empty();
      this.pontszam();
    });

    $(window).on("select", (event) => {
      if (event.detail != 0) {
        $("#szavak").empty();
        this.#dataService.getData(
          "api/szavak/" + event.detail,
          this.megjelenit,
          this.hibaMegjelenit
        );
      } else {
        $("#szavak").empty();
        this.#dataService.getData(
          "api/szavak",
          this.megjelenit,
          this.hibaMegjelenit
        );
      }
    });
  }

  megjelenit(list) {
    new View(list, $("#szavak"));
  }

  megjelenitTema(list) {
    new TemaView(list, $("#tema"));
  }

  hibaMegjelenit(error) {
    new HibaView(error, $("#hiba"));
  }

  pontszam() {
    $("#pontszam").append("<h5>pontok száma: " + this.#pontszam + "</h5>");
  }
}

export default Controller;
