import './AddTodo.css';

import * as React from 'react';

import { Button, Input } from 'antd';
import { ITodoAction, addTodo } from 'src/redux/actions/TodoActions';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';

const { TextArea } = Input;

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addTodo: (content: string, description: string) => 
      dispatch<ITodoAction>(addTodo({ content, description }))
  }
}

interface Props {
  addTodo?: (content: string, description: string) => ITodoAction;
}

interface State {
  content: string;
  description: string;
}

class AddTodo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: '',
      description: ''
    };
    this.contentChangeHandler = this.contentChangeHandler.bind(this);
    this.addTodoEventHandler = this.addTodoEventHandler.bind(this);
    this.descriptionChangeHandler = this.descriptionChangeHandler.bind(this);
    this.clear = this.clear.bind(this);
  }

  clear() {
    this.setState({
      ...this.state,
      content: '',
      description: ''
    });
  }

  contentChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      content: e.target.value
    });
  }

  descriptionChangeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      ...this.state,
      description: e.target.value
    });
  }

  addTodoEventHandler() {
    this.setState({
      ...this.state,
      content: '',
      description: ''
    });
    if (this.props.addTodo) {
      this.props.addTodo(this.state.content, this.state.description);
    }
  }

  render() {
    return (
      <div id='add-todo-container'>
        <h2>Add a Todo Item</h2>
        <label>content: </label>
        <Input value={this.state.content} onChange={this.contentChangeHandler}/>
        <label>description: </label>
        <TextArea value={this.state.description}
        onChange={this.descriptionChangeHandler} style={{ height: '25%' }}/>
        <Button style={{ float: 'right' }} onClick={this.addTodoEventHandler}>Add</Button>
        <Button style={{ float: 'right', marginRight: '0.5rem' }} 
        onClick={this.clear}>Clear</Button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);
