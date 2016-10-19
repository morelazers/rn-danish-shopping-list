import React, { Component } from 'react';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import ItemScreen from './containers/item-screen';
import * as reducers from './store/reducers';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

import firebase from 'firebase';

if (firebase.apps.length < 1) {
	const firebaseConfig = {
	  apiKey: "AIzaSyBuJ2dIODRIVc8Qw4FknBxWvUeb88ag6Aw",
	  authDomain: "todo-f5101.firebaseapp.com",
	  databaseURL: "https://todo-f5101.firebaseio.com"
	};
	firebase.initializeApp(firebaseConfig);
}

class App extends Component {

	render () {
		return (
			<Provider store={store}>
				<ItemScreen/>
			</Provider>
		);
	}

}

export default (App);