import {getStore} from './store'



function reducers ({action, payload, ...rest}){

    switch(action.type){
        case "edit": return "edit plan";
        case "delete": return "remove plan";
        case "add": return "create a new plan";
        default: return store
    }

}


export default reducers