import React, { Component } from 'react';
import Input from '../components/ui/Input';
import classes from '../stylesheets/containers/UserInfo.module.css';
import { updateObject, checkValidity } from '../shared/utility';

class UserInfo extends Component {
	state={
		userInfo: {
			phone: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: ''
				},
				value: '',
				validation: {
					required: true,
					validPhone: true
				},
				valid: false,
				touched: false
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: ''
				},
				value: '',
				validation: {
					required: true,
					validEmail: true
				},
				valid: false,
				touched: false
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: ''
				},
				value: '',
				validation: {
					required: true,
					minLength: 8,
					maxlength: 15,
					validPassword: true
				},
				valid: false,
				touched: false
			}
		}
	}

	componentDidMount(){
		this.setPlaceholders();
	}

	setPlaceholders(){
		let updatedFormElement;
		let updatedElementConfig;
		let count =0;
		
		let updatedUserInfoForm = {
			...this.state.userInfo
		};		

		for(let key in this.state.userInfo){
			updatedFormElement = {
				...updatedUserInfoForm[key]
			};
			
			updatedElementConfig = {
				...updatedFormElement['elementConfig']
			};		
			updatedElementConfig.placeholder = this.props.formLabels[count];		
			updatedFormElement['elementConfig'] = updatedElementConfig;
			updatedUserInfoForm[key] = updatedFormElement;			
			count++;
		}
				
		this.setState({userInfo: updatedUserInfoForm});
	}

	orderHandler = (event) => {
		event.preventDefault();		
		let updatedFormElement;		
		let updatedUserInfoForm = {
			...this.state.userInfo
		};		

		for(let key in this.state.userInfo){
			// updatedFormElement = {
			// 	...updatedUserInfoForm[key]
			// };
			// updatedFormElement.touched = true;
			// updatedUserInfoForm[key] = updatedFormElement;
			
			updatedFormElement = updateObject(updatedUserInfoForm[key], {touched: true});
			updatedUserInfoForm = updateObject(updatedUserInfoForm, {[key]: updatedFormElement});
		}
		this.setState({userInfo: updatedUserInfoForm});
	}
	
	inputChangedHandler = (event, inputIdentifier) => {
		// const updatedUserInfoForm = {
		// 	...this.state.userInfo
		// };
		// const updatedFormElement = {
		// 	...updatedUserInfoForm[inputIdentifier]
		// };
		// updatedFormElement.value = event.target.value;
		// updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
		// updatedUserInfoForm[inputIdentifier] = updatedFormElement;	
		
		const updatedFormElement = updateObject( this.state.userInfo[inputIdentifier], 
			{value: event.target.value, 
			 valid: checkValidity(event.target.value, this.state.userInfo[inputIdentifier].validation)
			});		
		const updatedUserInfoForm = updateObject(this.state.userInfo, { [inputIdentifier]: updatedFormElement });
		this.setState({userInfo: updatedUserInfoForm});
	}

	render(){		
		const formElementsArray = [];
		for(let key in this.state.userInfo){
			formElementsArray.push({
				id: key,
				config: this.state.userInfo[key]
			});
		}		
		
		let form = (
			<form onSubmit={this.orderHandler}>
				{formElementsArray.map(formElement => (
					<Input
						key={formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
						invalid={!formElement.config.valid}
						shouldValidate={formElement.config.validation}
						touched={formElement.config.touched}
						changed={(event) => this.inputChangedHandler(event, formElement.id)} />
				))}
				<button >{this.props.buttonText}</button>
			</form>
		);
		
		return(
			<div className={classes.UserInfo}>
				<h4>{this.props.formText}</h4>
				{form}
			</div>
		);
	}
}

export default UserInfo;