import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers/app-reducers';
// import './index.scss';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faSearch, faShoppingCart,faChevronDown } from '@fortawesome/free-solid-svg-icons'

// library.add(faSearch,faShoppingCart,faChevronDown);
//import 'bootstrap/dist/css/bootstrap.css';

//store
const store = createStore(appReducer);

//ReactDom (Route)
ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
