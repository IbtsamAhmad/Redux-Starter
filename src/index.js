import store from './store';
import {bugAdded,bugRemoved, bugResolver} from './actions'

const unsubscribe =store.subscribe(() =>{
    console.log("Store Changed", store.getState());
})
store.dispatch(bugAdded("Bug One"));
store.dispatch(bugAdded("Bug Two"));
// unsubscribe();
// store.dispatch(bugRemoved(1));
store.dispatch(bugResolver(1));
console.log(store.getState());