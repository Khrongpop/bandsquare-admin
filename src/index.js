import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// ######## Redux ##################

import { Provider } from 'react-redux'

import { createStore } from 'redux'
import rootReducer from './reducers'

// ######## Redux ##################


import { BrowserRouter } from 'react-router-dom' // ######## Route ##################



// ######## Redux ##################

const store = createStore(rootReducer)

const MyApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)


// ReactDOM.render(<MyApp />, document.getElementById('root'));

// ######## Redux ##################


// ######## Route ##################

const AppWithRouter = () => (
  <BrowserRouter>
    <MyApp />
  </BrowserRouter>
)

// ######## Route ##################

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
