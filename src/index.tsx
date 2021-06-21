import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import TodoApp from './components/TodoApp';
import './css/fonts/iconfont.css';
import { Provider } from 'react-redux'
import store from './store'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);
