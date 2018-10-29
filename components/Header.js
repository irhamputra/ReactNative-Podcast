import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity
} from 'react-native';

const Header = ({ messages, onDownPress, onQueuePress, onMessagePress }) => {
	const {container, message, button} = styles;

	return(
		<View style={container}>
			<TouchableOpacity onPress={onDownPress}>
				<Image style={button} source={require('../icons/expand.png')}/>
			</TouchableOpacity>

			<Text onPress={onMessagePress} style={message}>
				{messages.toUpperCase()}
			</Text>

			<TouchableOpacity onPress={onDownPress}>
				<Image style={button} source={require('../icons/queue.png')}/>
			</TouchableOpacity>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		height: 72,
		paddingTop: 50,
		paddingLeft: 12,
		paddingRight: 12,
		flexDirection: 'row'
	},
	message: {
		flex: 1,
		textAlign: 'center',
		color: 'rgba(255,255,255, 0.72)',
		fontWeight: 'bold',
		fontSize: 10,
	},
	button: {
		opacity: 0.72
	}
});

export default Header;