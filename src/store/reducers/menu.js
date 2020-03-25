import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState ={
	menu: null,
	error: false
};

const getMenuData = (state, action) => {
	const updatedProperties = {
		menu: action.menu,
		error: false
	};
	return updateObject(state, updatedProperties);
}

const getMenuDataFail = (state, action) => {
	return updateObject(state, {error: true});
}

const reducer = (state = initialState, action) => {
	switch(action.type){		
		case actionTypes.GET_MENU_DATA: return getMenuData(state, action);
		case actionTypes.GET_MENU_DATA_FAIL: return getMenuDataFail(state, action);
		default: return state;
	}
};

export default reducer;