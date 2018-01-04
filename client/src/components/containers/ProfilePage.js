import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/profileActions'

// import our components
import GeneralForm from '../GeneralForm'
import ActionList from '../ActionList'

class ProfilePage extends Component{

	render(){
		let {actions, state} = this.props
		let { profile } = state
		let actionButtonsToShow = profile.edit ? ['save'] : ['edit']
		let formValues = {}

		let formFields = (
			<div>
				<input type="text" placeholder="First Name..." defaultValue={profile.firstName} readOnly={!profile.edit} ref={(node)=> this.firstName = node }/>
				<input type="text" placeholder="Last Name..." defaultValue={profile.lastName} readOnly={!profile.edit} ref={(node)=> this.lastName = node } />
				<textarea placeholder="bio" defaultValue={profile.bio} readOnly={!profile.edit} ref={(node)=> this.bio = node }></textarea>
				<ActionList
					buttons={actionButtonsToShow}
					onEditClick={(e)=>{e.preventDefault(); actions.toggleEdit()}}
					onSaveClick={(e)=>{
						e.preventDefault()
						let data = {
							firstName : this.firstName.value || 'Unknown',
							lastName : this.lastName.value || 'Unknown',
							bio: this.bio.value || 'Unknown'
						}

						actions.saveProfile(data)
					}}
					/>
			</div>
		)

		return(
			<div>
				<GeneralForm fields={formFields}/>
			</div>
		)
	}
}


function mapStateToProps(state) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage)
