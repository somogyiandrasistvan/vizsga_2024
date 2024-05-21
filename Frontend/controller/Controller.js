import DataService from "../modell/DataService.js";
import HibaView from "../view/HibaView.js";
import View from "../view/View.js";

class Controller {

    #dataService;

    constructor() {
        this.init();
    }

    init() {
        this.#dataService = new DataService();

        /*
        this.#dataService.getData("api/", this.megjelenit, this.hibaMegjelenit);

        $(window).on("esemenyNev", (event) => {
            console.log(event.detail);
            this.dataService.postData("api/", event.detail);
        });
        */
    }

    megjelenit(list) {
        new View(list, $("#"));
    }

    hibaMegjelenit(error) {
        new HibaView(error, $("#"));
    }
}

export default Controller;