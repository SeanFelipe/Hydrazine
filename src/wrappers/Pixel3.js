import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { ConnectedAlpha } from '../components/Alpha.js'
import pixel3 from '../../assets/img/pixel3-scaled-for-inner-resolution.png'


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
