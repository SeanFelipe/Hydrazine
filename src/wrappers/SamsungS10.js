import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { ConnectedAlpha } from '../components/Alpha.js'
import S10 from '../../assets/img/s10-1604.png'


export class SamsungS10 extends Component {
  constructor(props) {
    super(props)

    this.phonePng = S10
    this.physicalPhoneHeight = 1604
    this.physicalPhoneWidth = 720
    this.displayHeight = this.physicalPhoneHeight / 2
    this.displayWidth = this.physicalPhoneWidth / 2 + 20
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
