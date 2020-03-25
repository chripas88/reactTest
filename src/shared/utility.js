export const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties
	};
};

export const checkValidity = (value, rules) => {
	let isValid = true;
	if(rules.required){
		isValid = value.trim() !== '' && isValid;
	}
	if(rules.minLength){
		isValid = value.length >= rules.minLength && isValid;
	}
	if(rules.maxLength){
		isValid = value.length <= rules.maxLength && isValid;
	}
	if(rules.validEmail){
		isValid = validateEmail(value);
	}
	if(rules.validPhone){
		isValid = validatePhone(value);
	}
	if(rules.validPassword){
		isValid = validatePassword(value);
	}
	return isValid;
}

const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
	}

const validatePhone =(inputtxt)	=> {
	var phoneno = /^\+?([0-9]{0,2})?([0-9]{10})$/;

	if(inputtxt.match(phoneno)){
		if(inputtxt.includes('+') && inputtxt.length === 13){
			return true;
		}
		else if(!inputtxt.includes('+') && inputtxt.length === 10){
			return true;
		}
		else{
			return false;
		}
	}
	else {			
		return false;
	}
}

const validatePassword = (inputtxt) => { 
	var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	if(inputtxt.match(decimal))	{
		return true;
	}
	else { 		
		return false;
	}
}