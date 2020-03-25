import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import classes from '../stylesheets/containers/Layout.module.css';
import Toolbar from '../components/navigation/Toolbar';
import Slider from './Slider';
import SideDrawer from '../components/navigation/SideDrawer';

class Layout extends React.Component {
	state = {
		showSideDrawer: false
	}	

	componentDidMount(){
		this.props.initMenuData();
	}

	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false});
	}
	
	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return {showSideDrawer: !prevState.showSideDrawer};
		});
	}
	
	render(){
		return(
			<React.Fragment>
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} menu={this.props.menu}/>
				<Slider />
				<SideDrawer	open={this.state.showSideDrawer}	closed={this.sideDrawerClosedHandler} menu={this.props.menu}/>
				<main className={classes.Content} >{this.props.children}</main>
			</React.Fragment>	
		);
	}

}

const mapStateToProps = state => {
	return{
		menu: state.menu.menu,
		error: state.menu.error
	};
}

const mapDispatchToProps = dispatch => {
	return{
		initMenuData: () => dispatch(actions.initMenuData())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Layout,(prevProps, nextProps) => nextProps.menu === prevProps.menu));