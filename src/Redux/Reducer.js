import { ADD_TEMP } from "./ActionType";


const initialData = {
    temp: null,
  };
export const Reducer=(state=initialData,action)=>{
  
    switch (action.type) {
        case ADD_TEMP:
            return {...state,temp:action.payload}
        
        default:
            return state;
    }
}