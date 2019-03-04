import { ADD_TODO, FINISH_TODO } from '../../constants';

import { ITodoAction } from '../actions/TodoActions';
import { Todo } from '../../typing';
import { TodoState } from '../typing';

const initialState: TodoState = {
  allIds: [],
  byIds: new Map<number, Todo>()
}

export default function handleTodoEvent(state: TodoState = initialState, action: ITodoAction): TodoState {
  switch (action.type) {
    case ADD_TODO: {
      if (action.payload.content && action.payload.description) {
        const { id, content, description } = action.payload;
        const byIds: Map<number, Todo> = new Map(state.byIds);
        byIds.set(id, { content, isFinished: false, description });
        return {
          ...state,
          allIds: [...state.allIds, id],
          byIds
        };
      }
    }
    case FINISH_TODO: {
      const { id } = action.payload;
      const byIds: Map<number, Todo> = new Map(state.byIds);
      const item = byIds.get(id);
      if (item) {
        byIds.set(id, { content: item.content, isFinished: !item.isFinished, description: item.description });
        return {
          ...state,
          byIds
        };
      }
    }
    default: return state;
  }
}
