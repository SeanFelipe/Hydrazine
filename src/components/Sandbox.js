import React from 'react'
import {
  View,
  Text,
} from 'react-native'

import PatrickHandFont from '../../assets/fonts/patrickhandsc.ttf'

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
    return (
      <View>
        <Text style={{
          fontFamily: 'PatrickHandSC',
          //fontFamily: 'System',
          fontSize: 48,
        }}>Top Scorers:</Text>

      </View>
    )
  }
}
