import { CardComponent } from "./components/card-componenst.js";
import { InputComponent } from "./components/input-component.js";
import { ListComponent } from "./components/list-componenst.js";
import { products } from "./mock/product.js";
import { RenderPosition, render } from "./render.js";

const inputContainer = document.getElementById('bodyApp');



render(new InputComponent(), inputContainer, RenderPosition.AFTERBEGIN);
render(new ListComponent(), inputContainer);


const searchInput = document.getElementById('search-input');
const listContainer = document.getElementById('list');

// products.forEach(product => {
//     render(new CardComponent(product.title), listContainer, RenderPosition.AFTERBEGIN);
// });

searchInput.addEventListener('change', ()=>{
    products.forEach(product => {
        if(product.title == RegExp(searchInput.value)){
            console.log(product.title);
                render(new CardComponent(product.title), listContainer, RenderPosition.AFTERBEGIN);
        }
    });
})







// function filterList() {
    
// }

// searchInput.addEventListener('input', function(){
    
// })