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

export class SamsungS10 extends Component {
  constructor(props) {
    super(props)

    this.phonePng = S10
    this.physicalPhoneHeight = 1604
    this.physicalPhoneWidth = 720
    this.displayHeight = this.physicalPhoneHeight / 2
    this.displayWidth = this.physicalPhoneWidth / 2 + 20

  }
}

export class OnePlus5T extends Component {
  constructor(props) {
    super(props)

    this.phonePng = onePlus
    this.physicalPhoneHeight = 1356
    this.physicalPhoneWidth = 664
    this.displayHeight = this.physicalPhoneHeight / 2 + 60
    this.displayWidth = this.physicalPhoneWidth / 2 + 30

  }
}

export class Pixel3 extends Component {
  constructor(props) {
    super(props)

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

    this.phonePngStyle = {
      width: this.displayWidth,
      height: this.displayHeight,
    }
  }

  render() {

    const containerStyle = {
      borderWidth: 4,
      height: this.displayInnerResolutionHeight,
      width: this.displayInnerResolutionWidth,
      left: this.innerPadx,
      top: this.innerPady,
    }

    return (
      <View>
        <ImageBackground
          style={{ width: this.displayWidth, height: this.displayHeight }}
          source={this.phonePng}
        >

          <View style={ containerStyle }>
            <ConnectedAlpha />
          </View>

        </ImageBackground>
      </View>
    )
  }
}


