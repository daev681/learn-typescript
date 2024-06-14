import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './reducers';
import { Action, Todo } from './types';


const TodoList = () => {
    const [todoText , setTodoText] = useState<string>('');
    const [state , dispatch] = useReducer(reducer , initialState);

    const handleAddTodo = () => {
        if(todoText.trim() != ''){
            dispatch({type : 'ADD_TODO' , payload : todoText});
            setTodoText('');
        }
    }

    const handleDeleteTodo = (id : number) => {
        dispatch({type : 'DELETE_TODO' , payload : id})

    }

    return (
        <div>
          <h2>Todo List</h2>
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Enter a new todo"
          />
          <button onClick={handleAddTodo}>Add Todo</button>
          <ul>
            {state.todos.map((todo: Todo) => (
              <li key={todo.id}>
                {todo.text}{' '}
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
    )
}

export default TodoList;