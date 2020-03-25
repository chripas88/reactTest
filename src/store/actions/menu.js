import * as actionTypes from './actionTypes';
import axios from '../../axios/axios-data';

const getMenuData = (menu) => {
	return {
		type: actionTypes.GET_MENU_DATA,
		menu: menu
	};
};

const getMenuDataFail = () => {
	return{
		type: actionTypes.GET_MENU_DATA_FAIL
	};
};

export const initMenuData = () => {
	return dispatch => {
		axios.get('/menu')
			.then(response => {
				dispatch(getMenuData(response.data));
			})
			.catch(error => {
				dispatch(getMenuDataFail());
			});
	};
};