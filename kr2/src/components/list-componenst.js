import { createElement } from "../render.js";
import { AbstractComponent } from "./AbstractComponent.js";

function createListComponent() {
    return(
        `
        <ul id="list">
        </ul>
        `
    );
}

export class ListComponent extends AbstractComponent{   

    constructor(){
        super();
    }

    // #reRenderProducts(status, taskService){

    // }

    getTemplate() {
        return createListComponent();
    }
}