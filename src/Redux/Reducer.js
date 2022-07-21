import { ADD_TEMP } from "./ActionType";

const initialData = {
  temp: null,
};

export const reducer = (state = initialData, { type, payload }) => {

switch (type) {
    case ADD_TEMP:
        return{...state,temp:payload};

    default:
     return state;
}
};
