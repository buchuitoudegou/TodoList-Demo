import { ADD_TODO, FINISH_TODO } from '../../constants';

let todoId: number = 0;

export interface ITodoAction {
  type: 'ADD_TODO' | 'FINISH_TODO';
  payload: {
    content?: string,
    id: number,
    description?: string
  };
}

export function addTodo(
  { content, description }: { content: string, description: string }
): ITodoAction {
  return {
    payload: {
      content,
      description,
      id: ++ todoId
    },
    type: ADD_TODO
  }
}

export function finishTodo({ id }: { id: number }): ITodoAction {
  return {
    payload: {
      id
    },
    type: FINISH_TODO
  };
}
