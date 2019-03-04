import './TodoList.css';

import * as React from 'react';

import { AppState, TodoState } from '../../redux/typing';
import { FILTER_NAME, Todo } from '../../typing';
import { ITodoAction, finishTodo } from '../../redux/actions/TodoActions';

import { Checkbox } from 'antd';
import { Dispatch } from 'redux';
import FilterBar from '../FilterBar';
import TodoItem from '../Todo';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState) => {
  const { allIds, byIds } = state.todo;
  const { currentFilter } = state.filter;
  const targetIds: number[] = [];
  const targetByIds = new Map<number, Todo>();
  if (currentFilter === FILTER_NAME.ALL) {
    return {
      allIds,
      byIds
    };
  } else if (currentFilter === FILTER_NAME.COMPLETED) {
    byIds.forEach((val, key) => {
      if (val.isFinished) {
        targetByIds.set(key, val);
        targetIds.push(key);
      }
    });
    return {
      allIds: targetIds,
      byIds: targetByIds
    };
  } else {
    byIds.forEach((val, key) => {
      if (!val.isFinished) {
        targetByIds.set(key, val);
        targetIds.push(key);
      }
    });
    return {
      allIds: targetIds,
      byIds: targetByIds
    };
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ITodoAction>) => {
  return {
    finishTodo: (id: number) => dispatch<ITodoAction>(finishTodo({ id }))
  }
}

interface Props extends TodoState {
  finishTodo?: (id: number) => ITodoAction
};

class TodoList extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.finishEventHandler = this.finishEventHandler.bind(this);
  }

  finishEventHandler(idx: number) {
    return () => {
      if (this.props.finishTodo) {
        this.props.finishTodo(this.props.allIds[idx]);
      }
    }
  }

  render() {
    const { allIds, byIds } = this.props;
    return (
      <div>
        <FilterBar />
        <div id='todo-container'>
          { 
            allIds.map((val, idx) => {
              const item: Todo | undefined= byIds.get(val);
              return item 
                ? 
                <div key={`todo-item-${idx}`} className='todo-item-wrapper'>
                  <Checkbox disabled={item.isFinished}
                  checked={item.isFinished}
                  onChange={this.finishEventHandler(idx)}/>
                  <TodoItem
                  isFinished={item.isFinished}
                  content={item.content || ''}
                  description={item.description}/>
                </div>
                : null
            })
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
