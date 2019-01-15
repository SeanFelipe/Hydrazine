import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  View,
  ScrollView,
  Text,
  TextInput,
} from 'react-native'

import * as appActions from './../store/actions/actions';
import { ConnectedPlayerRow } from './PlayerRow'
import { ConnectedBackButton } from './BackButton'

import { getPlayerApiId } from '../net/net'

import { Styles, About } from '../css/styles'
import { Fonts } from '../css/fonts'


class SearchyScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      //searchFieldText: 'enter player name',
      searchFieldText: 'Ricardo',
    }

    this.runQuery = this.runQuery.bind(this)
  }

  componentDidMount() {
    getPlayerApiId(this.state.searchFieldText)
  }

  runQuery() {
    getPlayerApiId(this.state.searchFieldText)
  }

  render() {

    /*
          <ConnectedBackButton />
          */


   return (
     <View style={{}}>
       <Text style={Fonts.topScorersTitleText}>Searchy Screen</Text>
       <View style={{ marginTop: 30, flex: 1, alignItems: 'center' }}>
         <TextInput
          style={ Fonts.backButton }
          placeholder={this.state.searchFieldText}
          onChangeText={(text) => this.setState({ searchFieldText: text })}
         />
         <Text style={Fonts.backButton} onPress={this.runQuery}>Run Query</Text>

        </View>
      </View>
     )
  }
}

export const ConnectedSearchyScreen = connect((store) => ({
  initialData: store.app.initialData,
  dispatch: store.dispatch,
}))(SearchyScreen)
