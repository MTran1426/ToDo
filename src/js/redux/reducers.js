import {getStore, updateStore} from './store'



function reducers (action){ //{action, payload, ...rest}

    switch(action.type){
        case "edit":
            // const store = getStore();
            // const index = action.payload.index;
            // const newStore = [????]
            // updateStore(newStore)
            // action.cb()
        return "edit plan";
        case "delete":
        const store = getStore();
        const index = action.payload.index;
        const newStore = [...store.slice(0,index), ...store.slice(index+1)]
        updateStore(newStore)
        action.cb()
        return "remove plan";
        case "add"
            // const store = getStore();
            // const index = action.payload.index;
            // const newStore = [????]
            // updateStore(newStore)
            // action.cb()
        : return "create a new plan";
        default: return store
    }

}


export default reducers