import React from 'react'
import { Switch, NavLink, Route } from 'react-router-dom'
import HomePage from './Homepage'
import ProfilePage from './containers/ProfilePage'
import NotFoundPage from './NotFoundPage'
import GamePage from './containers/GamePage'

// main app component
class App extends React.Component {
  render() {
    return (
				<div>
					<div>
						<NavLink exact to="/">Home</NavLink>
						{' | '}
						<NavLink exact to="/profile">Profile</NavLink>
						{' | '}
						<NavLink exact to="/games">Games</NavLink>
						{' | '}
						<NavLink to="/page-does-not-exist">404</NavLink>
						{' | '}
					</div>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/profile" component={ProfilePage} />
						<Route path="/games" component={GamePage} />
						<Route component={NotFoundPage} />
					</Switch>
				</div>
    );
  }
}

export default App
