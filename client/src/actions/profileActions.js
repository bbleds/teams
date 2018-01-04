export function toggleEdit() {
  return function (dispatch) {
    return dispatch({
      type: 'TOGGLE_EDIT'
    })
  }
}

export function saveProfile(data) {
	// save profile info to db
	console.log('logging from save profile', data);


  return function (dispatch) {
    return dispatch({
      type: 'TOGGLE_EDIT',
			firstName: data.firstName,
			lastName: data.lastName,
			bio: data.bio
    })
  }
}
