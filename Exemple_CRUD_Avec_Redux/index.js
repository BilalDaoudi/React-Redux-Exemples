import React from 'react';



import ReactDOM from 'react-dom/client';





import { Provider } from 'react-redux';



import { legacy_createStore } from 'redux';



import App from './App';

import reducer from './reducer';

const store = legacy_createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
