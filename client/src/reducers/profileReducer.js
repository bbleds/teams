let initialState = {
	firstName: 'Unknown',
	lastName: 'Unknown',
	bio: 'Unknown',
	edit: false
}

export default function profileReducer(state = initialState, action) {

  switch (action.type) {
    case 'TOGGLE_EDIT':
      return {
				...state,
				edit: !state.edit
			}
    default:
      return state
  }
}
