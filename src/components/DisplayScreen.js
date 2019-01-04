import React from 'react'
import { connect } from 'react-redux'
import { Button, View, ScrollView, Text, TextInput, Dimensions } from 'react-native'

import * as appActions from './../store/actions/actions';
import { Styles, About } from '../css/styles'
import { ConnectedPlayerRow } from './PlayerRow'
import { ConnectedBackButton } from './BackButton'


class DisplayScreen extends React.Component {
  render() {

    const scorers = this.props.initialData.scorers
    //<View style={ Styles.topScorersContainer }>
      /*
      <View style={{ width: Dimensions.get('window').width }}>
        <View style={Styles.topScorersTitleContainer}>
          <Text style={Styles.topScorersTitleText}>Top Scorers:</Text>
          <View style={Styles.scrollViewContainer}>
            <ScrollView style={Styles.scorersScrollView}>
              { Array(5).fill().map((_, i) => {
                  return <ConnectedPlayerRow key={i} playerRowIndex={i} record={scorers[i]}/>
                })
              }
            </ScrollView>
          </View>
        </View>
        */

    return (
      <View>
        <View style={Styles.topScorersTitleContainer}>
          <Text style={Styles.topScorersTitleText}>Top Scorers:</Text>
          <View style={Styles.scrollViewContainer}>
            <ScrollView style={Styles.scorersScrollView}>
              { Array(5).fill().map((_, i) => {
                  return <ConnectedPlayerRow key={i} playerRowIndex={i} record={scorers[i]}/>
                })
              }
            </ScrollView>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <ConnectedBackButton />
        </View>
      </View>
     )
  }
}

export const ConnectedDisplayScreen = connect((store) => ({
  initialData: store.app.initialData,
  dispatch: store.dispatch,
}))(DisplayScreen)
