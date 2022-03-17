import * as actions from './actionTypes';
export function bugAdded(description){
   return  {
        type:actions.BUG_ADDED,
        payload:{
            description: description
        }
    }
}
export function bugRemoved(id){
return {
    type:"bugRemoved",
    payload:{
        id
    }
}
}
export function bugResolver(id){
    return {
        type:"bugResolver",
        payload:{
            id
        }
    }
 }