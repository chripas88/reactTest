import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../../stylesheets/components/page/Tile.module.css';

const tile = (props)=>{
	let item = props.tileData ?
			<React.Fragment>
				<div>{props.tileData.icon}</div>	
				<h4>{props.tileData.title}</h4>	
				<p>{props.tileData.description}</p>	
				<NavLink to="/">{props.tileData.link}</NavLink>	
			</React.Fragment> : '';
		return(
			<React.Fragment>
				<div className={classes.Tile}>
					{item}
				</div>
			</React.Fragment>
		);	
}

export default tile;