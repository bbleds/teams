export function toggleEdit() {
  return function (dispatch) {
    return dispatch({
      type: 'TOGGLE_EDIT'
    })
  }
}

export function saveProfile() {
	// save profile info to db

  return function (dispatch) {
    return dispatch({
      type: 'TOGGLE_EDIT'
    })
  }
}
