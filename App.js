import React, {Component} from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';

import Header from "./components/Header";
import AlbumArt from "./components/AlbumArt";
import TrackDetails from "./components/TrackDetail";
import SeekBar from "./components/SeekBar";
import Control from "./components/Control";

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="white" barStyle="light-content"/>
				<Header messages="Playing from chart"/>
				<AlbumArt url="https://scene360.com/wp-content/uploads/2014/10/computergraphics-album-covers-2014-03.jpg"/>
				<TrackDetails title="Awake" artist="Tycho"/>
				<SeekBar trackLength={204} currentPosition={156}/>
				<Control/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgb(4,4,4)',
	},
});
