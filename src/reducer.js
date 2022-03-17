let lastId = 0; 
import * as actions from './actionTypes';

export default function reducer(state = [],action){
    switch(action.type){
        case  actions.BUG_ADDED:  
        return [
            ...state,{
                id:++lastId,
                description: action.payload.description,
                resolved:false
            }
        ] 
        case actions.BUG_REMOVED: 
            return state.filter(bug => bug.id !== action.payload.id)
            case actions.BUG_RESOLVER: 
                state.map((bug) =>{
                   if (bug.id !== action.payload.id) {
                    return bug  
                   }
                   else{
                       return bug.resolved = true
                   }
                 })
               
              return state;
       default :return state    
    }


}