import { DECREMENT, INCREMENT } from "./actionTypes";

// initial state
const initialState = {
    value: 0
}

// Create counter reducer
const counterReducer = (state = initialState, action) =>{
    switch (action.type){
        case INCREMENT: 
            return {
                ...state,
                value: state.value + action.payload
            };

        case DECREMENT: 
            return {
                ...state,
                value: state.value - action.payload
            };

        default: 
            return state
    }
}


export default counterReducer;