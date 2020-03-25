import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from '../stylesheets/containers/Page.module.css';
import Tile from '../components/page/Tile';
import * as actions from '../store/actions/index';

class Page extends Component{

	componentDidMount() {
		this.props.initPageData();
	}	

	render(){
		const page = this.props.page ? this.props.page[0] : null;
		let tiles = this.props.page ?
				<React.Fragment>
					<h2>{page.description}</h2>
					<div className={classes.Page}>					
						{page.tiles.map(tile => (
							<Tile key={tile.title} tileData={tile} />
						))}
					</div>
				</React.Fragment> : '';
		return(
			<React.Fragment>
				{tiles}
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return{
		page: state.page.page,
		error: state.page.error
	};
}

const mapDispatchToProps = dispatch => {
	return{
		initPageData: () => dispatch(actions.initPageData())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Page,(prevProps, nextProps) => nextProps.page === prevProps.page));