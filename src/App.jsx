/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
// import Login from './features/login/container/login.container';
import Users from './features/users/container/users';
import UserContainer from './features/users/container/user'
import Layout from './hoc/layout/component/layout.component';
import Notification from './notification';
import Repositories from './features/users/container/repos';



class App extends PureComponent {
	render() {
	
			return (
				<Layout>
					<Notification />
					<Switch>
            <Route path='/users' component={Users}  exact/>
			<Route path='/users/:username/:repo' component={Repositories} exact />
			<Route path='/users/:username' component={UserContainer} exact />
            <Redirect to='/users' from=''/>
          </Switch>
				</Layout>
			);
	}
}

export default App;
