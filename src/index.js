import React from 'react';
import ReactDOM from 'react-dom';
import {createStore ,combineReducers ,applyMiddleware , compose} from "redux";
// import {Provider} from 'react-redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/results';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res:resultReducer
});


const logger = store =>{
    return next => {
        return action =>{
            console.log('[Middleware] Dispatching', action);
            const result=next(action);
            console.log('[Middlewere] next state',store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__|| compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
