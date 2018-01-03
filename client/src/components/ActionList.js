import React from 'react'

const ActionList = ({onEditClick, onSaveClick, buttons}) => {

	// map button events to buttons passed via props
	let buttonEvents = {
		edit : onEditClick,
		save : onSaveClick
	}

	// build button output
	let output = buttons.map((item,index) => {

		let clickFunction

		switch (item.toLowerCase()){
			case 'edit':
				clickFunction = buttonEvents.edit
				break
			case 'save':
				clickFunction = buttonEvents.save
				break
			default:
				clickFunction = () => false
				break
		}

		return ( <button key={`${item}-${index}`} onClick={clickFunction}>{item}</button> )
	})

	return (
		<div>{output}</div>
	)
}

export default ActionList
