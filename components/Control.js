import React from 'react';
import {
	View,
	StyleSheet,
	Image,
	TouchableOpacity
} from 'react-native';

const Control = (
	{paused, shuffleOn, repeatOn, onPressPlay, onPressPause, onBack, onForward, onPressShuffle, onPressRepeat, forwardDisabled}
) => {
	const {container, playButton, secondaryControl, off} = styles;

	return (
		<View style={container}>
			<TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
				<Image style={[secondaryControl, shuffleOn ? [] : off]} source={require('../icons/shuffle.png')}/>
			</TouchableOpacity>
			<View style={{width: 40}}/>
			<TouchableOpacity onPress={onBack}>
				<Image source={require('../icons/previous.png')} />
			</TouchableOpacity>
			<View style={{width: 20}}/>

			{!paused ?
				<TouchableOpacity onPress={onPressPause}>
					<View style={playButton}>
						<Image source={require('../icons/pause.png')}/>
					</View>
				</TouchableOpacity> :
				<TouchableOpacity onPress={onPressPlay}>
					<View style={playButton}>
						<Image source={require('../icons/play.png')}/>
					</View>
				</TouchableOpacity>
			}

			<View style={{width: 20}}/>
			<TouchableOpacity onPress={onForward} disabled={forwardDisabled}>
				<Image style={[forwardDisabled && {opacity: 0.3}]} source={require('../icons/next.png')}/>
			</TouchableOpacity>
			<View style={{width: 40}}/>
			<TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
				<Image style={[secondaryControl, repeatOn ? [] : off]} source={require('../icons/repeat.png')}/>
			</TouchableOpacity>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 8,
	},
	playButton: {
		height: 72,
		width: 72,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 72 / 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	secondaryControl: {
		height: 18,
		width: 18,
	},
	off: {
		opacity: 0.30,
	}
});

export default Control