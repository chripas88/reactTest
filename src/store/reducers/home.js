import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState ={
	home: null,
	error: false
};

const getHomeData = (state, action) => {
	const updatedProperties = {
		home: action.home,
		error: false
	};
	return updateObject(state, updatedProperties);
}

const getHomeDataFail = (state, action) => {
	return updateObject(state, {error: true});
}

const reducer = (state = initialState, action) => {
	switch(action.type){		
		case actionTypes.GET_HOME_DATA: return getHomeData(state, action);
		case actionTypes.GET_HOME_DATA_FAIL: return getHomeDataFail(state, action);
		default: return state;
	}
};

export default reducer;