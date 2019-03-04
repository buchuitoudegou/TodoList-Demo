import { FILTER_NAME } from '../../typing';
import { FilterState } from '../typing';
import { IFilterAction } from '../actions/SetFilter';

const initialState: FilterState = {
  currentFilter: FILTER_NAME.ALL
};

export default function handleFilterEvent(state: FilterState = initialState, action: IFilterAction): FilterState {
  if (action.type === 'SET_FILTER') {
    return {
      ...state,
      currentFilter: action.payload.filter
    };
  } else {
    return state;
  }
}
