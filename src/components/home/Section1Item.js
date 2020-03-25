import React from 'react';
import classes from '../../stylesheets/components/home/Section1Item.module.css';

const section1Item = (props)=>{
	let section1ItemData = props.image ? 
			<div className={classes.Section1Item}>
				<img src={props.image.img} alt={props.image.title}></img>
				<p>{props.image.title}</p>
			</div> : '';
		return(
			<React.Fragment>
				<div >
					{section1ItemData}
				</div>
			</React.Fragment>
		);	
}

export default section1Item;