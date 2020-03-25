import * as actionTypes from './actionTypes';
import axios from '../../axios/axios-data';

const getSliderData = (slider) => {
	return {
		type: actionTypes.GET_SLIDER_DATA,
		slider: slider
	};
};

const getSliderDataFail = () => {
	return{
		type: actionTypes.GET_SLIDER_DATA_FAIL
	};
};

export const initSliderData = () => {
	return dispatch => {
		axios.get('/slider')
			.then(response => {
				dispatch(getSliderData(response.data));
			})
			.catch(error => {
				dispatch(getSliderDataFail());
			});
	};
};