import { ADD_TODO } from "../actions";

const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            //adicionar o to-do
            const newTodo = {
                text: action.text
            }
            console.log('chamou add', action.text);
            return [...state, newTodo];
        default:
            return state;
    }
}

export default todoListReducer;