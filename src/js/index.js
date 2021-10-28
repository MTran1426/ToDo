import { createStore } from "./redux/store";
import {Router} from "./routes/router"
import { dataFetcher } from './utils/dataFetcher'
 
const app = document.querySelector('#app');

Router(window.location.pathname)

console.log(window.location.pathname)

const onAppInit = async function(e){
    let employees = await dataFetcher('./data/todos.json')

    createStore(employees)

}

window.addEventListener('load', onAppInit)



