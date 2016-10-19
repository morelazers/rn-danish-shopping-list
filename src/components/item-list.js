import React, { Component } from 'react';
import { ListView } from 'react-native';

import Item from './item';

class ItemList extends Component {
  render() {
  	let items = this.props.items;
  	let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    ds = ds.cloneWithRows(items);
    return (
    	<ListView
    		enableEmptySections={true}
    		dataSource={ds}
    		renderRow={(item) => {
    			return (
    				<Item onDelete={this.props.onDelete}>{item}</Item>
    			);
    		}}
    	/>
  	);
  }
}

export default (ItemList);
