import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import classes from '../stylesheets/containers/Home.module.css';
import Section1 from '../components/home/Section1';
import Section2 from '../components/home/Section2';
import * as actions from '../store/actions/index';

class Home extends Component{

	componentDidMount() {
		this.props.initHomeData();
		this.props.history.replace('/home/section1');
	}

	getSectionData(id){
		return this.props.home ? this.props.home[0].sections.find(section=> section.id === id) : null;
	}

	section1Handler = () => {
		this.props.history.replace('/home/section1');
	}
	
	section2Handler = () => {
		this.props.history.replace('/home/section2');
	}

	render(){
		const title = this.props.home ? this.props.home[0].description : '';
		return(
			<React.Fragment>
				<h2>{title}</h2>
				<div className={classes.Home}>
					<div className={classes.SectionButtons}>
						<button onClick={() => this.section1Handler()}>Section1</button>
						<button onClick={() => this.section2Handler()}>Section2</button>
					</div>					
					<Route
					path={this.props.match.path + '/section1'}
					render={()=>(<Section1 sectionData={this.getSectionData("01")} />)}/>
					<Route
					path={this.props.match.path + '/section2'}
					render={()=>(<Section2 sectionData={this.getSectionData("02")} />)}/>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return{
		home: state.home.home,
		error: state.home.error
	};
}

const mapDispatchToProps = dispatch => {
	return{
		initHomeData: () => dispatch(actions.initHomeData())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home,(prevProps, nextProps) => nextProps.home === prevProps.home));