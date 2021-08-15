import { ADD_TODO } from "../actions";

const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            //adicionar o to-do
            
    
        default:
            return state;
    }
}

export default todoListReducer;