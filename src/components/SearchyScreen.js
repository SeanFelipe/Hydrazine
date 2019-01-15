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
//import { ConnectedPlayerRow } from './PlayerRow'
import { ConnectedBackButton } from './BackButton'
import { ApiIdRow } from './ApiIdRow'

import { getPlayerApiId } from '../net/net'

import { Styles, About } from '../css/styles'
import { Fonts } from '../css/fonts'


class SearchyScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      //searchFieldText: 'enter player name',
      searchFieldText: 'Ricardo',
      searchResults: null,
    }

    this.runQuery = this.runQuery.bind(this)
    this.renderSearch = this.renderSearch.bind(this)
    this.renderResults = this.renderResults.bind(this)
  }

  componentDidMount() {
    this.runQuery()
  }

  runQuery() {
    getPlayerApiId(this.state.searchFieldText)
      .then((records) => {
        this.setState({ searchResults: records })
      })
  }

  renderSearch() {
    return (
     <View style={{ marginTop: 30, flex: 1, alignItems: 'center' }}>
       <TextInput
        style={ Fonts.backButton }
        placeholder={this.state.searchFieldText}
        onChangeText={(text) => this.setState({ searchFieldText: text })}
       />
       <Text style={Fonts.backButton} onPress={this.runQuery}>Run Query</Text>
     </View>
    )
  }

  renderResults() {
    return (
     <View style={{ marginTop: 30, flex: 1, alignItems: 'center' }}>
         <ApiIdRow name='foo' firstName='bar' apiId='42' />
     </View>
    )
  }

  render() {

    /*
          <ConnectedBackButton />
          */

    console.log("render() with searchResults: " + this.state.searchResults)

   return (
     <View style={{}}>
       <Text style={Fonts.topScorersTitleText}>Searchy Screen</Text>
       { this.state.searchResults
         ? this.renderResults()
         : this.renderSearch()
       }
      </View>
     )
  }
}

export const ConnectedSearchyScreen = connect((store) => ({
  initialData: store.app.initialData,
  dispatch: store.dispatch,
}))(SearchyScreen)
