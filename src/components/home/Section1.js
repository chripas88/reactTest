import React from 'react';
import classes from '../../stylesheets/components/home/Section1.module.css';
import Section1Item from './Section1Item';

const section1 = (props)=>{
	let section1data = props.sectionData ?
			<div>
				{props.sectionData.images.map(image => (
					<div key={image.title} className={props.sectionData.images.indexOf(image) === 0 ? classes.Big : classes.Small}>
					<Section1Item image={image}/>
					</div>
				))}	
			</div> : '';
		return(
			<React.Fragment>
				<div className={classes.Section}>
					{section1data}
				</div>
			</React.Fragment>
		);	
}

export default section1;