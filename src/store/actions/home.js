import * as actionTypes from './actionTypes';
import axios from '../../axios/axios-data';

const getHomeData = (home) => {
	return {
		type: actionTypes.GET_HOME_DATA,
		home: home
	};
};

const getHomeDataFail = () => {
	return{
		type: actionTypes.GET_HOME_DATA_FAIL
	};
};

export const initHomeData = () => {
	return dispatch => {
		axios.get('/home')
			.then(response => {
				dispatch(getHomeData(response.data));
			})
			.catch(error => {
				dispatch(getHomeDataFail());
			});
	};
};