import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
} from 'react-native';

const TrackDetails = ({title, artist, onAddPress, onMorePress, onTitlePress, onArtistPress}) => {
	const {container, detailsWrapper, titles, artists, button, moreButton, moreButtonIcon} = styles;
	return (
		<View style={container}>
			<TouchableOpacity onPress={onAddPress}>
				<Image style={button} source={require('../icons/add.png')}/>
			</TouchableOpacity>
			<View style={detailsWrapper}>
				<Text style={titles} onPress={onTitlePress}>{title}</Text>
				<Text style={artists} onPress={onArtistPress}>{artist}</Text>
			</View>
			<TouchableOpacity onPress={onMorePress}>
				<View style={moreButton}>
					<Image style={moreButtonIcon} source={require('../icons/more.png')}/>
				</View>
			</TouchableOpacity>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 24,
		flexDirection: 'row',
		paddingLeft: 20,
		alignItems: 'center',
		paddingRight: 20
	},
	detailsWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	titles: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center'
	},
	artists: {
		color: 'rgba(255,255,255, 0.72)'
	},
	button:{
		opacity: 0.72
	},
	moreButton: {
		borderColor: 'rgb(255,255,255)',
		borderWidth: 2,
		opacity: 0.72,
		borderRadius: 10,
		width: 20,
		height: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	moreButtonIcon: {
		height: 17,
		width: 17
	}
});

export default TrackDetails;