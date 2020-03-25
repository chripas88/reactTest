import React from 'react';
import classes from '../../stylesheets/components/ui/Input.module.css';

const input = (props) => {
	let inputElement = null;
	const inputClasses =[classes.InputElement];
	
	if(props.invalid && props.shouldValidate && props.touched) {
		inputClasses.push(classes.Invalid);
	}
	
	switch(props.elementType){
		case ('input'):
			inputElement = <input
				 className={inputClasses.join(' ')}
				 {...props.elementConfig}
				 value={props.value} onChange={props.changed}/>;
			break;
		
		default:
			inputElement = <input
				 className={inputClasses.join(' ')}
				 {...props.elementConfig}
				 value={props.value} onChange={props.changed}/>;
}
	
	let validationError = null;
	if (props.invalid && props.touched) {
			validationError = <p className={classes.ValidationError}>{props.elementConfig.placeholder} is Invalid</p>;
	}
	
	return(
		<div className={classes.Input}>		
			{inputElement}
			{validationError}
		</div>
	);
}

export default input;