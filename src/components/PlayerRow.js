import React from 'react'
import { connect } from 'react-redux'
import { Animated, Button, View, ScrollView, Text, TextInput } from 'react-native'

import { getSelectedPlayer, setSelectedPlayer } from './../store/actions/actions';

import { Alpha, Styles, StudentInfoStyles } from '../css/styles'
import { Fonts } from '../css/fonts'


export class PlayerRow extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        pressed: false,
        bracketOpacity: new Animated.Value(0),
      }

    this.renderPlayerData = this.renderPlayerData.bind(this)
    this.selectPlayer = this.selectPlayer.bind(this)
    this.determineShowBrackets = this.determineShowBrackets.bind(this)
    this.bracketAnim = this.bracketAnim.bind(this)

    this.pulseDuration = 500
  }

  componentDidMount() {
    this.bracketAnim()
  }

  selectPlayer() {
    this.props.dispatch(setSelectedPlayer(this.props.record.player.name))
  }

  renderPlayerData() {
    const infos = this.props.record.player
    const numGoals = this.props.record.numberOfGoals

    return (
      <View>
        <Text style={Fonts.playerDetails}>Nationality: { infos.nationality }</Text>
        <Text style={Fonts.playerDetails}>Shirt Number: { infos.shirtNumber }</Text>
        <Text style={Fonts.playerDetails}>Goals: { numGoals }</Text>
        <Text style={Fonts.playerDetails}>Birth date: { infos.dateOfBirth }</Text>
      </View>
    )
  }

  bracketAnim() {
    return Animated.sequence([
      Animated.timing(
        this.state.bracketOpacity, {
          toValue: 1,
          duration: this.pulseDuration,
        }
      ),
      Animated.timing(
        this.state.bracketOpacity, {
          toValue: 0,
          duration: this.pulseDuration,
        }
      )
    ]).start(this.bracketAnim)
  }

  determineShowBrackets() {
    let showBrackets = false

    let firstRow = this.props.playerRowIndex === 0 ? true : false

    if ( this.props.selectedPlayer === 'NO_PLAYER_SELECTED_YET' && firstRow ) {
      showBrackets = true
    }

    if ( this.props.selectedPlayer === this.props.record.player.name ) {
      showBrackets = true
    }

    return showBrackets
  }

   render() {

    let { bracketOpacity } = this.state
    let pulseBracket = Object.assign({
      opacity: bracketOpacity
    }, Styles.bracket)

    const showBrackets = this.determineShowBrackets()
    const selected = this.props.record.player.name === this.props.selectedPlayer ? true : false

    //console.log("playerData render() selected: " + selected)

    return (
      <View style={Styles.playerRowContainer} >
        <View style={Styles.playerNameRowContainer} >
          { showBrackets
            ? <Animated.View style={{opacity: bracketOpacity}}><Text style={Fonts.bracket}>[</Text></Animated.View>
            : null
          }

          <Text style={Fonts.players} onPress={this.selectPlayer} >
            { this.props.record.player.name }
          </Text>

          { showBrackets
            ? <Animated.View style={{opacity: bracketOpacity}}><Text style={Fonts.bracket}>]</Text></Animated.View>
            : null
          }

        </View>

        <View style={Styles.playerDataContainer}>
          { selected
            ? this.renderPlayerData()
            : null
          }
        </View>
      </View>
    )
  }
}

export const ConnectedPlayerRow = connect((store) => ({
  selectedPlayer: store.app.selectedPlayer,
  dispatch: store.dispatch,
}))(PlayerRow)
