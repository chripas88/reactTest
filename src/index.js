import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './store/reducers/home';
import pageReducer from './store/reducers/page';
import menuReducer from './store/reducers/menu';
import sliderReducer from './store/reducers/slider';
import './index.css';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== undefined ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const rootReducer = combineReducers({
	home: homeReducer,
	page: pageReducer,
	menu: menuReducer,
	slider: sliderReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	
);

ReactDOM.render(app, document.querySelector('#root'));