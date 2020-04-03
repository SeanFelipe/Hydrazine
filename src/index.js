import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { RuuiProvider } from 'react-universal-ui';
import { connect, Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import { store } from './store';
import { ConnectedAlpha } from './components/Alpha.js';
import {
  S10Mockup,
  Pixel3Mockup,
  OnePlus5TMockup,
  iPhone6Mockup
} from './PhoneMockups.js'


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
      <View style={ this.parentViewStyle } >
        { Platform.OS === 'web'
          ? <Pixel3Mockup />
          : <ConnectedAlpha />
        }
      </View>
    )
  }
}


function AppContainer(props) {
  return <RuuiProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </RuuiProvider>;
}

export default hot(module)(AppContainer)
