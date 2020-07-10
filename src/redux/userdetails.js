import * as ActionTypes from './ActionTypes';

export const UserDetails = (state = { isLoading: true, errMess: null, userdetails:[]}, action) => {
	switch (action.type) {
		case ActionTypes.ADD_USER_DETAILS:
			return {...state, isLoading: false, errMess: null, userdetails: action.payload};

		case ActionTypes.USER_DETAILS_LOADING:
			return {...state, isLoading: true, errMess: null, users: []}

		default:
			return state;
	}
};