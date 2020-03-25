import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState ={
	slider: null,
	error: false
};

const getSliderData = (state, action) => {
	const updatedProperties = {
		slider: action.slider,
		error: false
	};
	return updateObject(state, updatedProperties);
}

const getSliderDataFail = (state, action) => {
	return updateObject(state, {error: true});
}

const reducer = (state = initialState, action) => {
	switch(action.type){		
		case actionTypes.GET_SLIDER_DATA: return getSliderData(state, action);
		case actionTypes.GET_SLIDER_DATA_FAIL: return getSliderDataFail(state, action);
		default: return state;
	}
};

export default reducer;