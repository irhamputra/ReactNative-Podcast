import React from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import Slider from 'react-native-slider';

function pad(n, width, z = 0) {
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position) => {
	return [
		pad(Math.floor(position / 60), 2),
		pad(position % 60, 2)
	]
};


const SeekBar = ({ trackLength, currentPosition, onSeek, onSlidingStart }) => {
	const elapsed = minutesAndSeconds(currentPosition);
	const remaining = minutesAndSeconds(trackLength - currentPosition);
	const {slider, container, track, thumb, text} = styles;

	return(
		<View style={container}>
			<View style={{flexDirection: 'row'}}>
				<Text style={text}>
					{`${elapsed[0]} : ${elapsed[1]}`}
				</Text>
				<View style={{ flex: 1 }}/>
				<Text style={[text, { width: 40}]}>
					{trackLength > 1 && "-" + remaining[0] + ':' + remaining[1]}
				</Text>
			</View>

			<Slider
				maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
				onSlidingStart={onSlidingStart}
				onSlidingComplete={onSeek}
				value={currentPosition}
				style={slider}
				minimumTrackTintColor='#fff'
				maximumTrackTintColor='rgba(255,255,255, 0.14)'
				thumbStyle={thumb}
				trackStyle={track}
			/>
		</View>
	)
};

const styles = StyleSheet.create({
	slider: {
		marginTop: -12,
	},
	container: {
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 16,
	},
	track: {
		height: 2,
		borderRadius: 1,
	},
	thumb: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: 'white',
	},
	text: {
		color: 'rgba(255, 255, 255, 0.72)',
		fontSize: 12,
		textAlign:'center',
	}
});

export default SeekBar