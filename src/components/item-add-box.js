import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { MKTextField } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as colors from '../resources/colors';

class ItemAddBox extends Component {

	constructor (props) {
		super(props);
		this.state = {
			text: "",
			height: 0
		};
	}

	render () {
		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<MKTextField
						underlineEnabled={false}
						underlineSize={0}
						style={[styles.textInput, {height: Math.max(35, this.state.height)}]}
						placeholder={"Item..."}
						value={this.state.text}
						onChangeText={(text) => { this.setState({text: text}) }}
						autoCapitalize="sentences"
						autoCorrect={true}
						onContentSizeChange={(event) => {
	            this.setState({height: event.nativeEvent.contentSize.height});
	          }}
	          onSubmitEditing={() => {
	          	this.setState({text: ""});
	          	this.props.onSubmit(this.state.text);
	          }}
	          blurOnSubmit={false}
	          returnKeyType={"go"}
					/>
					<Icon
						style={styles.submitButton}
						name={"send"}
						size={25}
						onPress={() => {
							this.setState({text: ""});
							this.props.onSubmit(this.state.text)
						}}
					/>
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		paddingBottom: 10,
		shadowOffset: {width: 0, height: 8},
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 6,
		backgroundColor: colors.ACCENT,
		zIndex: 10,
	},
	inputContainer: {
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
		padding: 5,
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 2,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: colors.ICONS,
	},
	textInput: {
		marginRight: 10,
		flex: 1
	},
	submitButton: {
		marginLeft: 10,
		color: colors.PRIMARY
	}
});

export default (ItemAddBox);