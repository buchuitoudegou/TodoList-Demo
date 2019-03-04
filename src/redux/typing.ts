import { FILTER_NAME, Todo } from '../typing';

export interface TodoState {
  allIds: number[];
  byIds: Map<number, Todo>;
};

export interface FilterState {
  currentFilter: FILTER_NAME
};

export interface AppState {
  todo: TodoState,
  filter: FilterState
};
