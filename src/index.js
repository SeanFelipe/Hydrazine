import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui';
import { connect, Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import { store } from './store';
import { increaseCounter } from './store/actions/actions';
import { ConnectedAlpha } from './components/Alpha.js';

import S10 from '../assets/img/s10-1604.png'
import onePlus from '../assets/img/oneplus-5t.png'


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
  constructor(props) {
    super(props)

    this.physicalPhoneHeight = 1604
    this.physicalPhoneWidth = 720
    this.phonePng = S10
    this.displayHeight = this.physicalPhoneHeight / 2
    this.displayWidth = this.physicalPhoneWidth / 2 + 20

    //this.phonePng = onePlus
    //this.displayHeight = 1356
    //this.displayWidth = 664

    this.parentViewStyle = {
      flex: 1,
      backgroundColor: '#34495e',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }

    this.phonePngStyle = {
      width: this.displayWidth,
      height: this.displayHeight,
    }
  }

  render() {


    return (
      <View style={ this.parentViewStyle } >
        <View style={ this.phonePngStyle } >

          <ImageBackground
            style={{ width: this.displayWidth, height: this.displayHeight }}
            source={this.phonePng}
          >
            <ConnectedAlpha />
          </ImageBackground>

        </View>
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
