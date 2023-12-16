import { createElement } from "../render.js";
import { AbstractComponent } from "./AbstractComponent.js";

function createCardComponent(title) {
    return(
        `
        <li>${title}</li>
        `
    );
}

export class CardComponent extends AbstractComponent{   
    #title = null;

    constructor(title){
        super();
        this.#title = title;
    }

    getTemplate() {
        return createCardComponent(this.#title);
    }
}