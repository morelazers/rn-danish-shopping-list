import React, { Component } from 'react';

import firebase from 'firebase';
import { connect } from 'react-redux';

import * as itemsActions from '../store/items/actions';

import ItemAddBox from '../components/item-add-box';

class ItemAdd extends Component {

	addItem (item) {
		this.props.dispatch(itemsActions.addItem(item));
	}

	render () {
		return (
			<ItemAddBox onSubmit={this.addItem.bind(this)} />
		);
	}

}

export default connect()(ItemAdd);