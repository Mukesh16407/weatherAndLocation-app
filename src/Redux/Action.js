import { ADD_TEMP } from "./ActionType";


export const addTemp=(payload) =>{
 
    return {
        type:ADD_TEMP,
        payload
    }
}