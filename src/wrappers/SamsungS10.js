import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { ConnectedAlpha } from '../components/Alpha.js'
import S10 from '../../assets/img/s10-1604.png'


export class SamsungS10 extends Component {
  constructor(props) {
    super(props)

    this.phonePng = S10
    // WQHD max resolutions
    this.physicalPhoneHeight = 3040
    this.physicalPhoneWidth = 1440
    // FHD+ resolutions (1080p)
    //this.physicalPhoneHeight = 2280
    //this.physicalPhoneHeight = 1080
    // HD+ resolutions (720p)
    //this.physicalPhoneHeight = 1520
    //this.physicalPhoneHeight = 720

    this.browserDisplayHeight = this.physicalPhoneHeight / 4 + 50
    this.browserDisplayWidth = this.physicalPhoneWidth / 4 + 20
    this.displayInnerResolutionHeight = this.browserDisplayHeight
    this.displayInnerResolutionWidth = this.browserDisplayWidth
    this.innerPadx = ( this.displayWidth - this.displayInnerResolutionWidth ) / 2
    this.innerPady = ( this.displayHeight - this.displayInnerResolutionHeight ) / 2
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
