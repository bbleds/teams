let initialState = {
	firstName: 'Unknown',
	lastName: 'Unknown',
	bio: 'Unknown',
	edit: false
}

export default function profileReducer(state = initialState, action) {

  switch (action.type) {
    case 'TOGGLE_EDIT':
		console.log('toggling the edit');
      return {
				...state,
				edit: !state.edit,
				firstName: action.firstName || state.firstName,
				lastName: action.lastName || state.lastName,
				bio: action.bio || state.bio
			}
    default:
      return state
  }
}
