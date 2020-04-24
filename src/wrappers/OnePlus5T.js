import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { ConnectedAlpha } from '../components/Alpha.js'
import onePlus from '../../assets/img/oneplus-5t.png'


export class OnePlus5T extends Component {
  constructor(props) {
    super(props)

    this.phonePng = onePlus
    this.physicalPhoneHeight = 1356
    this.physicalPhoneWidth = 664
    this.displayHeight = this.physicalPhoneHeight / 2 + 60
    this.displayWidth = this.physicalPhoneWidth / 2 + 30
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
