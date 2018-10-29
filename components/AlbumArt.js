import React from 'react';
import {
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	Dimensions
} from 'react-native';

const AlbumArt = ({ url, onPress }) => {
	const {container, image} = styles;
	return(
		<View style={container}>
			<TouchableOpacity onPress={onPress}>
				<Image style={image} source={{ uri: url }}/>
			</TouchableOpacity>
		</View>
	)
};

const { width, height } = Dimensions.get('window');
const imageSize = width - 48;

const styles = StyleSheet.create({
	container: {
		paddingLeft: 24,
		paddingTop: 24,
		paddingRight: 24,
	},
	image: {
		width: imageSize,
		height: imageSize
	}
});

export default AlbumArt;
