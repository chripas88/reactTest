import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Page from '../containers/Page';

class App extends Component{
	render(){
		return(
			<div>
				<Layout>
					<Switch>
						<Route path="/page" component={Page} />
						<Route path="/home" component={Home} />
						<Redirect to="/home" />
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default withRouter(App);