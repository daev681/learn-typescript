export interface Todo {
    id : number;
    text : string;
}

export interface State {
    todos : Todo[];
}

export type Action = | {type : 'ADD_TODO' ; payload : string} | { type : 'DELETE_TODO'; payload : number}
