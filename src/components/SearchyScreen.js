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
      searchFieldText: 'enter player name',
      //searchFieldText: 'Ricardo',
      searchResults: null,
      noResults: false,
    }

    this.runQuery = this.runQuery.bind(this)
    this.renderSearchPre = this.renderSearchPre.bind(this)
    this.renderResults = this.renderResults.bind(this)
  }

  runQuery() {
    getPlayerApiId(this.state.searchFieldText)
      .then((response) => {
        if ( response.searchResult.length != 0 ) {
          this.setState({
            noResults: false,
            searchResults: response.searchResult
          })
        } else {
          this.setState({
            noResults: true,
            searchResults: null
          })
        }
      })
  }

  renderSearchPre() {
    return (
     <View style={{ marginTop: 30, flex: 1, alignItems: 'center' }}>
       <TextInput
        style={ Fonts.backButton }
        placeholder={this.state.searchFieldText}
        onChangeText={(text) => this.setState({ searchFieldText: text })}
       />
       { this.state.noResults
         ? <Text>No search results found.</Text>
         : null
        }

       <Text style={Fonts.backButton} onPress={this.runQuery}>Run Query</Text>
     </View>
    )
  }

  renderResults() {
    return (
      <View style={{ marginTop: 30, flex: 1, alignItems: 'center' }}>
        {
          this.state.searchResults.map((record, index) => {
            return <ApiIdRow key={index} datums={record} />
          })
        }
      </View>
    )
  }

  render() {

    /*
      <ConnectedBackButton />
      */

    return (
      <View style={{}}>
        <Text style={Fonts.topScorersTitleText}>Searchy Screen</Text>
        { this.state.searchResults
          ? this.renderResults()
          : this.renderSearchPre()
        }
      </View>
    )
  }
}

export const ConnectedSearchyScreen = connect((store) => ({
  initialData: store.app.initialData,
  dispatch: store.dispatch,
}))(SearchyScreen)
