import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui';
import { connect, Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import { store } from './store';
import { increaseCounter } from './store/actions/actions';
import { ConnectedAlpha } from './components/Alpha.js';

import { IndexStyles } from './css/styles'
import S10 from '../assets/img/samsung-s10-25.png'


type Props = {
	dispatch?: Function,
};

@connect(({ app }) => {
  //console.log("in @connect method, app has properties: " + Object.keys(app))
	return {
		counter: app.counter,
	};
})


class App extends Component {
  render() {
    return (
      <View style={ IndexStyles.main } >
                <ImageBackground
          style={{ width: 300, height: 650}}
          source={S10}
        >
        <ConnectedAlpha />
                        </ImageBackground>

      </View>
    )
  }

  increaseCounter = () => {
    this.props.dispatch(increaseCounter());
  };
}


function AppContainer(props) {
	return <RuuiProvider>
		<Provider store={store}>
			<App />
		</Provider>

		<Tooltip/>
	</RuuiProvider>;
}

export default hot(module)(AppContainer)
