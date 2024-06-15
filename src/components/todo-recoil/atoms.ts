// src/atoms.ts
import { atom } from 'recoil';

export interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<Todo[]>({
  key: 'todoListState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});