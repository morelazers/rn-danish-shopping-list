import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import * as colors from '../resources/colors';

class Item extends Component {
  render() {
  	let item = this.props.children;
    return (
    	<View style={styles.horizontal}>
    		<Icon
    			style={styles.deleteIcon}
    			name={"clear"}
    			size={20}
    			onPress={() => this.props.onDelete(item.id)}
    		/>
    		<View style={styles.separate}>
	    		<Text style={styles.itemText}>{item.text}</Text>
	    		<View style={styles.horizontalSeparator} />
	    		<Text style={styles.itemText}>{item.translation}</Text>
    		</View>
	    </View>
    );
	}
}

const styles = StyleSheet.create({
	horizontal: {
		flexDirection: "row", 
		alignItems: "center",
		backgroundColor: colors.ICONS,
		padding: 5, 
		margin: 10,
		shadowOffset: {width: 1, height: 1},
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 2,
		zIndex: 5
	},
	deleteIcon: {
		color: colors.SECONDARY_TEXT
	},
	separate: {
		justifyContent: "space-between",
		flex: 1,
		padding: 5
	},
	itemText: {
		color: colors.PRIMARY_TEXT
	},
	horizontalSeparator: {
		marginTop: 5,
		marginBottom: 5,
		borderBottomColor: colors.DIVIDER,
		borderBottomWidth: 1
	}
})

export default (Item);
