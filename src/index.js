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
import pixel3 from '../assets/img/pixel3-scaled-for-inner-resolution.png'

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

    this.phonePng = pixel3
    this.physicalPhoneHeight = 2318
    this.physicalPhoneWidth = 1092
    this.phoneResolutionWidth = 1080
    this.phoneResolutionHeight = 2160
    this.displayHeight = this.physicalPhoneHeight / 3 + 60
    this.displayWidth = this.physicalPhoneWidth / 3 + 30
    this.displayInnerResolutionHeight = this.phoneResolutionHeight / 3
    this.displayInnerResolutionWidth = this.phoneResolutionWidth / 3
    this.innerPadx = ( this.displayWidth - this.displayInnerResolutionWidth ) / 2
    this.innerPady = ( this.displayHeight - this.displayInnerResolutionHeight ) / 2

    this.browser = Platform.OS === 'web' ? true : false

    /*
    this.phonePng = S10
    this.displayHeight = this.physicalPhoneHeight / 2
    this.displayWidth = this.physicalPhoneWidth / 2 + 20
    */

    /*
    this.phonePng = onePlus
    this.physicalPhoneHeight = 1356
    this.physicalPhoneWidth = 664
    this.displayHeight = this.physicalPhoneHeight / 2 + 60
    this.displayWidth = this.physicalPhoneWidth / 2 + 30
    */

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

    this.browserRender = this.browserRender.bind(this)
    this.deviceRender = this.deviceRender.bind(this)

  }


  browserRender() {
    console.log("browserRender()")
    return (
      <View style={ this.phonePngStyle } >

        <ImageBackground
          style={{ width: this.displayWidth, height: this.displayHeight }}
          source={this.phonePng}
        >

          <View style={{
              borderWidth: 4,
              height: this.displayInnerResolutionHeight,
              width: this.displayInnerResolutionWidth,
              left: this.innerPadx,
              top: this.innerPady,
            }}
          >

            <ConnectedAlpha />

          </View>
        </ImageBackground>
      </View>
    )
  }

  deviceRender() {
    console.log("deviceRender()")
    return (
      <View>
          <ConnectedAlpha />
      </View>
    )
  }


  render() {
    return (
      <View style={ this.parentViewStyle } >
        { this.browser
          ? this.browserRender()
          : this.deviceRender()
        }
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
