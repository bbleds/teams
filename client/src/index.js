
import React from 'react'
import {render} from 'react-dom'
import Root from './components/Root'
import configureStore, { history } from './store/configureStore'

const store = configureStore()

// render application to page
render(
	<div>
		<Root store={store} history={history} />
	</div>,
	document.getElementById('app')
)
