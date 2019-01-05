import React from 'react'
import { connect } from 'react-redux'
import { Button, View, ScrollView, Text, TextInput, Dimensions } from 'react-native'

import * as appActions from './../store/actions/actions';
import { ConnectedPlayerRow } from './PlayerRow'
import { ConnectedBackButton } from './BackButton'

import { Styles, About } from '../css/styles'
import { Fonts } from '../css/fonts'

class DisplayScreen extends React.Component {
  render() {

    const scorers = this.props.initialData.scorers

    return (
      <View style={Styles.flex}>
        <View style={Styles.topScorersTitleContainer}>
          <Text style={Fonts.topScorersTitleText}>Top Scorers:</Text>
          <View style={Styles.scrollViewContainer}>
            <ScrollView>
              { Array(5).fill().map((_, i) => {
                  return <ConnectedPlayerRow key={i} playerRowIndex={i} record={scorers[i]}/>
                })
              }
            </ScrollView>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <ConnectedBackButton />jlk
        </View>
      </View>
     )
  }
}

export const ConnectedDisplayScreen = connect((store) => ({
  initialData: store.app.initialData,
  dispatch: store.dispatch,
}))(DisplayScreen)
