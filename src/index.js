import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui';
import { connect, Provider } from 'react-redux';

import { store } from './store';
import { increaseCounter } from './store/actions/actions';
import { ConnectedAlpha } from './components/Alpha.js';

import { IndexStyles } from './components/styles'

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
	'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
	'Shake or press menu button for dev menu',
	web: 'Command/Control+R to reload your browser :p\n' +
	'\nAnd in Browser, we have great advantage\nwhen using Chrome Developer Tool\ncompare to the poor native-dev-menu!',
});

type Props = {
	counter?: string,
	dispatch?: Function,
};

@connect(({ app }) => {
  //console.log("in @connect method, app has properties: " + Object.keys(app))
	return {
		counter: app.counter,
	};
})


class App extends Component {
	props: Props;

	render() {
      return (
        <View style={ IndexStyles.main } >
          <ConnectedAlpha />
        </View>
      )
	}

	increaseCounter = () => {
		this.props.dispatch(increaseCounter());
	};
}


export default function AppContainer(props) {
	return <RuuiProvider>
		<Provider store={store}>
			<App />
		</Provider>

		<Tooltip/>
	</RuuiProvider>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	buttonWrapper: {
		backgroundColor: '#00bcd4',
		marginTop: 20,
	},
	buttonIcon: {
		fontSize: 28,
		color: '#ffffff',
	},
});
