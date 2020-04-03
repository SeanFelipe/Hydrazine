import React, { Component } from 'react';
import { Platform, View, } from 'react-native';
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


class App extends Component {
  render() {

    const topContainerStyle = {
      flex: 1,
      backgroundColor: '#34495e',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }

    return (
      <View style={ topContainerStyle }>
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
