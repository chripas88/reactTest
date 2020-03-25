import React from 'react';
import classes from '../../stylesheets/components/slider/Slide.module.css';


const slide = (props) => (
	<div className={classes.Slide} style={{backgroundImage: `url(${props.image})`}}>		
		<h5 >{props.title}</h5>
		<p>{props.subtitle}</p>
	</div>
);


export default slide;