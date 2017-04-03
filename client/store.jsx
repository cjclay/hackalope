
import { createStore, combineReducers } from 'redux';

import testreducer from './reducers/testreducer.jsx';

//link to reducers
//import FILL_ME_IN from './reducers/FILL_ME_IN.jsx';

const combinedReducers = combineReducers({
	 testreducer
});


const store = createStore(combinedReducers);

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store;
