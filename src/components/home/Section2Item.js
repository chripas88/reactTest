import React from 'react';
import classes from '../../stylesheets/components/home/Section2Item.module.css';

const section2Item = (props)=>{
	let section2ItemData = props.title ? 
			<div className={classes.Section2Item}>
				<div id={classes.wide}>{props.title}</div>
				<div id={classes.narrow}>{props.amount / 10}%</div>
			</div> : '';
		return(
			<React.Fragment>
				<div >
					{section2ItemData}
				</div>
			</React.Fragment>
		);	
}

export default section2Item;