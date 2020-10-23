import 'antd/dist/antd.less';

import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from '@/App';
import store from '@/features';

const ModalContext = createContext({});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalContext.Provider value={{}}>
        <App />
      </ModalContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
