import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Users } from './users';
import { UserDetails } from './userdetails'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			users: Users,
			userdetails: UserDetails
		}),
		applyMiddleware(thunk, logger)
		);

	return store;
}