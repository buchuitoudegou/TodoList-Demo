import { FILTER_NAME } from '../../typing';
import { SET_FILTER } from '../../constants';

export interface IFilterAction {
  type: 'SET_FILTER';
  payload: {
    filter: FILTER_NAME
  };
};

export function setFilter({ filterName }: { filterName: FILTER_NAME }): IFilterAction {
  return {
    payload: {
      filter: filterName
    },
    type: SET_FILTER
  }
}
