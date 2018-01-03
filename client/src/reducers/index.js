import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
  routing: routerReducer,
	profile: profileReducer
});

export default rootReducer;
