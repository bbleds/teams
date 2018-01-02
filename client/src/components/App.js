import React from 'react'
import { Switch, NavLink, Route } from 'react-router-dom'
import HomePage from './Homepage'
import NotFoundPage from './NotFoundPage'

// main app component
class App extends React.Component {
  render() {
    return (
				<div>
					<div>
						<NavLink exact to="/">Home</NavLink>
						{' | '}
						<NavLink exact to="/test">what</NavLink>
						{' | '}
					</div>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route component={NotFoundPage} />
					</Switch>
				</div>
    );
  }
}

export default App
