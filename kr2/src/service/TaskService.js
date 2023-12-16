import {products} from "../mock/product.js";


export class TasksService {
    #Products = products;
    
    

    getTasksByStatus(title){
        const tasksStatus = this.#Products.filter(function(product) {
            return task.status == status;
        });
        return(tasksStatus)
    }
    deleteAll(){
        const filteredTasks = this.#Products.filter(task => task.status !== 'bin');
        this.#Products = filteredTasks; 
    }

    getTasks(){
        return this.#Products;
    }
}
