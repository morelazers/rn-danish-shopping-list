import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Platform } from 'react-native';

import firebase from 'firebase';
import { connect } from 'react-redux';

import * as itemsActions from '../store/items/actions';
import * as itemsSelectors from '../store/items/reducer';

import ItemAdd from './item-add';

import ItemList from '../components/item-list';

import * as colors from '../resources/colors';

class ItemScreen extends Component {

	componentDidMount () {
		this.props.dispatch(itemsActions.fetchItems());
	}

  onDelete (id) {
    this.props.dispatch(itemsActions.deleteItem(id));
  }

  render() {
  	if (!this.props.itemsById) return this.renderLoading();
    return (
      <View style={styles.appContainer}>
    		<ItemAdd />
        <ScrollView style={styles.itemContainer}>
  	    	<ItemList items={this.props.itemsById} onDelete={this.onDelete.bind(this)}/>
      	</ScrollView>
      </View>
    );
  }

  renderLoading () {
  	return (
  		<Text>Loading...</Text>
  	);
  }

}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: colors.ACCENT
  },
  itemContainer: {
    backgroundColor: colors.PRIMARY
  }
})

const mapStateToProps = (state) => {
	return {
		itemsById: itemsSelectors.getItemsById(state)
	}
}

export default connect(mapStateToProps)(ItemScreen);