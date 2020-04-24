import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { ConnectedAlpha } from './components/Alpha.js'

import { SamsungS10 } from './wrappers/SamsungS10'
import { OnePlus5T } from './wrappers/OnePlus5T'
import { Pixel3 } from './wrappers/Pixel3'


export class PhoneWrapper extends Component {
  constructor(props) {
    super(props)

    //this.PHONE_WRAPPER = 'Pixel3'
    this.PHONE_WRAPPER = 'SamsungS10'
    //this.PHONE_WRAPPER = 'OnePlus5T'
    //this.PHONE_WRAPPER = 'iPhone6'

    this.wrapper = this.wrapper.bind(this)
  }

  wrapper() {
    if ( this.PHONE_WRAPPER.toLowerCase() === 'pixel3' ) {
      return <Pixel3 />
    } else if ( this.PHONE_WRAPPER.toLowerCase() === 'samsungs10' ) {
      return <SamsungS10 />
    } else if ( this.PHONE_WRAPPER.toLowerCase() === 'oneplus5t' ) {
      return <OnePlus5T />
    }
  }

  render () {
    return (
      <View>
        { this.wrapper() }
      </View>
    )
  }
}
