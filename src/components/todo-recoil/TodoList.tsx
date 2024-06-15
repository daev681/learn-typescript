// src/TodoList.tsx
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState, Todo } from './atoms';

const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [inputValue, setInputValue] = useState<string>('');

  const addItem = () => {
    setTodoList([
      ...todoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const toggleItemCompletion = (id: number) => {
    const newList = todoList.map((item) => 
      item.id === id ? { ...item, isComplete: !item.isComplete } : item
    );
    setTodoList(newList);
  };

  const deleteItem = (id: number) => {
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
  };

  const updateInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={updateInputValue} />
      <button onClick={addItem}>Add</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => toggleItemCompletion(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteItem(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

let id = 0;
function getId() {
  return id++;
}

export default TodoList;