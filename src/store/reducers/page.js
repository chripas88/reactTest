import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState ={
	page: null,
	error: false
};

const getPageData = (state, action) => {
	const updatedProperties = {
		page: action.page,
		error: false
	};
	return updateObject(state, updatedProperties);
}

const getPageDataFail = (state, action) => {
	return updateObject(state, {error: true});
}

const reducer = (state = initialState, action) => {
	switch(action.type){		
		case actionTypes.GET_PAGE_DATA: return getPageData(state, action);
		case actionTypes.GET_PAGE_DATA_FAIL: return getPageDataFail(state, action);
		default: return state;
	}
};

export default reducer;