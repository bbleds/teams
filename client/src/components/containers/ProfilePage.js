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

		let formFields = (
			<div>
				<input type="text" placeholder="First Name..." defaultValue={profile.firstName} readOnly={!profile.edit} />
				<input type="text" placeholder="Last Name..." defaultValue={profile.lastName} readOnly={!profile.edit} />
				<textarea placeholder="bio" defaultValue={profile.bio} readOnly={!profile.edit}></textarea>
				<ActionList
					buttons={actionButtonsToShow}
					onEditClick={(e)=>{e.preventDefault(); actions.toggleEdit()}}
					onSaveClick={(e)=>{e.preventDefault(); actions.saveProfile()}}
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
