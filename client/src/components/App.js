import React from 'react'
import { Switch, NavLink, Route } from 'react-router-dom'
import HomePage from './Homepage'

// main app component
class App extends React.Component {
  render() {
    return (
				<div>
					<div>
						<NavLink exact to="/">Home</NavLink>
						{' | '}
					</div>
					<Switch>
						<Route exact path="/" component={HomePage} />
					</Switch>
				</div>
    );
  }
}

export default App
