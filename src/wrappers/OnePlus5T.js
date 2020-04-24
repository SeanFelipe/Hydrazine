import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { ConnectedAlpha } from '../components/Alpha.js'
import onePlus from '../../assets/img/oneplus-5t.png'


export class OnePlus5T extends Component {
  constructor(props) {
    super(props)

    this.phonePng = onePlus
    this.physicalPhoneHeight = 2160
    this.physicalPhoneWidth = 1080
    this.browserDisplayHeight = this.physicalPhoneHeight / 3 + 80
    this.browserDisplayWidth = this.physicalPhoneWidth / 3 + 30
    this.displayInnerResolutionHeight = this.browserDisplayHeight
    this.displayInnerResolutionWidth = this.browserDisplayWidth
    this.innerPadx = 0
    this.innerPady = 0
  }

  render() {

    const containerStyle = {
      height: this.displayInnerResolutionHeight,
      width: this.displayInnerResolutionWidth,
      left: this.innerPadx,
      top: this.innerPady,
    }

    return (
      <View>
        <ImageBackground
          style={{ width: this.browserDisplayWidth, height: this.browserDisplayHeight }}
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
