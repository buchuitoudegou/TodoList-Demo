import './index.css';
import 'antd/dist/antd.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import TodoApp from './view/TodoApp';
import registerServiceWorker from './registerServiceWorker';
import store from './redux';

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
