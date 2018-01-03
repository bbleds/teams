import React from 'react'
import ProfilePageActions from './ProfilePageActions'

const ProfilePageForm = () => {
	return (
		<form>
		<input type="text" placeholder="First Name..."/>
		<input type="text" placeholder="Last Name..."/>
		<textarea placeholder="bio"></textarea>
		<ProfilePageActions/>
		</form>
	)
}

export default ProfilePageForm
