import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { reducer } from './reducers/madlibs';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = composeEnhancers()(createStore)(reducer);

export default store;
