import React from 'react'
import {
  View,
  Text,
  Dimensions,
} from 'react-native'

import PatrickHandFont from '../../assets/fonts/patrickhandsc.ttf'

import { SearchStyles } from "../css/styles"
import { Fonts } from "../css/fonts"

const FontStyle = `@font-face {
  src: url(${PatrickHandFont});
  font-family: PatrickHandSC;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = FontStyle;
} else {
  style.appendChild(document.createTextNode(FontStyle));
}

// Inject stylesheet
document.head.appendChild(style);

export class Sandbox extends React.Component {
  render() {

    console.log("sandbox dimensions: " + Dimensions.get('window').width)

    /*
   <Text style={{
          fontFamily: 'PatrickHandSC',
          //fontFamily: 'System',
          fontSize: 48,
        }}>
        Top Scorers:
      </Text>
      */
    const w = Dimensions.get('window').width
    const h = Dimensions.get('window').height

    const cellWidth = w / 3
    //const cellHeight = h / 3
    const cellHeight = cellWidth

    return (
      <View>
        <View style={SearchStyles.backButtonContainer}>
          <Text style={Fonts.backButton}>Back</Text>
        </View>

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}>

        <View style={{width: cellWidth, height: cellHeight, backgroundColor: 'powderblue'}} />
        <View style={{width: cellWidth, height: cellHeight, backgroundColor: 'skyblue'}} />
        <View style={{width: cellWidth, height: cellHeight, backgroundColor: 'steelblue'}} />
      </View>
      </View>
    )
  }
}
