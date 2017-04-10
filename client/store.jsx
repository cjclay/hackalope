import { createStore, combineReducers} from 'redux';
import activeResult from './reducers/activeResult.jsx'
import authReducer from './reducers/authreducer.jsx';
import submissionReducer from './reducers/submissionReducer.jsx';
import searchReducer from './reducers/searchReducer.jsx';
import dialogReducer from './reducers/dialogReducer.jsx';
import commentsReducer from './reducers/testcommentsreducer.jsx';
import resultsReducer from './reducers/resultsReducer.jsx';
import addCommentReducer from './reducers/addCommentReducer.jsx';

// combine all reducers
const combinedReducers = combineReducers({
   results: resultsReducer,
   result: activeResult,
   user: authReducer,
	 submission: submissionReducer,
	 search: searchReducer,
	 dialogs: dialogReducer,
   comments: commentsReducer,
   comment: addCommentReducer
});

// initialize store and initialize redux dev tools
const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store;
