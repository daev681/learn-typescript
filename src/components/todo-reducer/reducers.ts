import { State, Action } from './types';

export const initialState : State = {
    todos : [],
}

export const reducer = (state : State = initialState , action : Action) : State => {
    switch(action.type){
        case 'ADD_TODO' :
            const newTodo = {
                id : state.todos.length + 1,
                text : action.payload,
            }
            return {
                ...state,
                todos : [...state.todos , newTodo],
           }
        case 'DELETE_TODO' :
            return {
                ...state,
                todos : state.todos.filter((todo) => todo.id !== action.payload)                
           }
        default:
            return state;
    }

}