import * as ActionTypes from './ActionTypes';

export const fetchUsers = () => (dispatch) => {

	dispatch(usersLoading());

	return fetch("https://jsonplaceholder.typicode.com/users")
	.then(response => {
		if (response.ok) {
			return response;
		} else {
			var error = new Error('Error ' + response.status + ': ' + response.statusText);
			error.response = response;
			throw error;
		}
	},
	error => {
		var errmess = new Error(error.message);
		throw errmess;
	})
	.then(response => response.json())
	.then(users => dispatch(addUsers(users)))
	.catch(error => dispatch(usersFailed(error.message)));
};

export const usersLoading = () => ({
	type: ActionTypes.USERS_LOADING
});

export const usersFailed = (errmess) => ({
	type: ActionTypes.USERS_FAILED,
	payload: errmess
});

export const addUsers = (users) => ({
	type: ActionTypes.ADD_USERS,
	payload: users
});

export const fetchUserDetails = (id) => (dispatch) => {

	dispatch(userDetailsLoading());

	const userdetails = {};

	return fetch("https://jsonplaceholder.typicode.com/users/" + id)
		.then(response => response.json())
		.then((user) => {
			userdetails.user = user;
			fetch("https://jsonplaceholder.typicode.com/posts?userId=" + id)
				.then(response => response.json())
				.then((posts) => {
					userdetails.post = posts[0];
					fetch("https://jsonplaceholder.typicode.com/albums?userId=" + id)
						.then(response => response.json())
						.then((albums) => {
							userdetails.album = albums[0];
							fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + userdetails.album.id)
								.then(response => response.json())
								.then((photos) => {
									userdetails.photos = photos;
									dispatch(addUserDetails(userdetails));
								});
						});
				});
		});
};

export const userDetailsLoading = () => ({
	type: ActionTypes.USER_DETAILS_LOADING
});

export const addUserDetails = (userdetails) => ({
	type: ActionTypes.ADD_USER_DETAILS,
	payload: userdetails
});