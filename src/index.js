import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from './redux/store/store';
import { RouteComponent } from './routes/router';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <RouteComponent />
  </Provider>,
  document.getElementById('root')
);
