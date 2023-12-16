import { createElement } from "../render.js";
import { AbstractComponent } from "./AbstractComponent.js";

function createInputComponent() {
    return(
        `
        <form>
        <input type="text" class="inputStyle" id="search-input" placeholder="Поиск...">
        </form>
        `
    );
}

export class InputComponent extends AbstractComponent{   

    getTemplate() {
        return createInputComponent();
    }
}