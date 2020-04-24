import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, ImageBackground } from 'react-native';

import { ConnectedAlpha } from './components/Alpha.js'

import S10 from '../assets/img/s10-1604.png'
import onePlus from '../assets/img/oneplus-5t.png'
import pixel3 from '../assets/img/pixel3-scaled-for-inner-resolution.png'


const parentViewStyle = () => {
  return ({
      flex: 1,
      backgroundColor: '#34495e',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  })
}

export class PhoneWrapper extends Component {
  constructor(props) {
    super(props)

    this.WRAPPER = 'pixel3'

    this.setConfig = this.setConfig.bind(this)
    this.phonePngStyle = this.phonePngStyle.bind(this)
    this.setPixel3 = this.setPixel3.bind(this)
    this.setSamsungS10 = this.setSamsungS10.bind(this)
    this.setOnePlus5T = this.setOnePlus5T.bind(this)

    this.config = this.setConfig(this.WRAPPER)
  }

  setConfig(phoneType) {
    if ( phoneType.toLowerCase() === 'pixel3' ) {
      return this.setPixel3()
    } else if ( phoneType.toLowerCase() === 'samsungs10' ) {
      return this.setSamsungS10()
    } else if ( phoneType.toLowerCase() === 'oneplus5t' ) {
      return this.setOnePlus5T()
    }

  }


  phonePngStyle() {
    return ({
      width: this.state.displayWidth,
      height: this.state.displayHeight,
    })
  }

  setPixel3() {
    const ph = 2318
    const pw = 2092
    const prh = 2160
    const prw = 1080
    const dh = ph / 3 + 60
    const dw = pw / 3 + 30
    const dirh = prh / 3
    const dirw = prw / 3

    config = {
      phonePng: pixel3,
      physicalPhoneHeight: ph,
      physicalPhoneWidth: pw,
      phoneResolutionHeight: prh,
      phoneResolutionWidth: prw,
      displayHeight: dh,
      displayWidth: dw,
      displayInnerResolutionHeight: dirh,
      displayInnerResolutionWidth: dirw,
      innerPady: ( dh - dirh ) / 2,
      innerPadx: ( dw - dirw ) / 2,
    }

    return config
  }

  setSamsungS10() {
    const pw = 1604
    const ph = 720,

    config = {
      phonePng: S10,
      physicalPhoneHeight: ph,
      physicalPhoneWidth: pw,
      displayHeight: ph / 2,
      displayWidth: pw / 2 + 20,
    }

    this.setState(config)
  }


  render() {

    /*
    const containerStyle = {
      height: this.state.displayInnerResolutionHeight,
      width: this.state.displayInnerResolutionWidth,
      left: this.state.innerPadx,
      top: this.state.innerPady,
    }
    */

    return (
      <View>
        {/*
        <ImageBackground
          style={{ width: this.state.displayWidth, height: this.state.displayHeight }}
          source={this.state.phonePng}
        >

          <View style={ containerStyle }>
            <ConnectedAlpha />
          </View>

        </ImageBackground>
        */}

        <Text>Foo</Text>

      </View>
    )
  }
}


