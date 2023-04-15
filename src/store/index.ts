import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './movies/reducer';

const rootReducer = combineReducers({
   moviesReducer,
})

const store = createStore(
   rootReducer, applyMiddleware(thunk)
)

export default store;
