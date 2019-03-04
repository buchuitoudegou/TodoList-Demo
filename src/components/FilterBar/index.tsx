import './FilterBar.css';

import * as React from 'react';

import { IFilterAction, setFilter } from 'src/redux/actions/SetFilter';

import { AppState } from 'src/redux/typing';
import { Dispatch } from 'redux';
import { FILTER_NAME } from 'src/typing';
import { connect } from 'react-redux';

interface Props {
  currentFilter: FILTER_NAME,
  setFilter: (filterName: FILTER_NAME) => IFilterAction
}

const mapStateToProps = (state: AppState) => {
  return {
    currentFilter: state.filter.currentFilter
  };
}

const mapDispatchToProps = (dispatch: Dispatch<IFilterAction>) => {
  return {
    setFilter: (filterName: FILTER_NAME) => dispatch<IFilterAction>(setFilter({ filterName }))
  }
}

class FilterBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  changeFilterHandler(filter: FILTER_NAME) {
    return () => {
      this.props.setFilter(filter);
    }
  }

  render() {
    return (
      <div id='filter-container'>
        {
          Object.keys(FILTER_NAME).map((val, idx) => {
            return (
              <span key={`filter-${idx}`} className={
                `filter ${val === this.props.currentFilter ? 'filter--active' : ''}`
              }
              onClick={this.changeFilterHandler(FILTER_NAME[val])}>{val}</span>
            );
          })
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
