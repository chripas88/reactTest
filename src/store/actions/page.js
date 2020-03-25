import * as actionTypes from './actionTypes';
import axios from '../../axios/axios-data';

const getPageData = (page) => {
	return {
		type: actionTypes.GET_PAGE_DATA,
		page: page
	};
};

const getPageDataFail = () => {
	return{
		type: actionTypes.GET_PAGE_DATA_FAIL
	};
};

export const initPageData = () => {
	return dispatch => {
		axios.get('/page')
			.then(response => {
				dispatch(getPageData(response.data));
			})
			.catch(error => {
				dispatch(getPageDataFail());
			});
	};
};