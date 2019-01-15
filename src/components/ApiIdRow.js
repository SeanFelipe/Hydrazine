import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  View,
  ScrollView,
  Text,
  TextInput,
} from 'react-native'


import { Alpha, Styles, Expr } from '../css/styles'
import { Fonts } from '../css/fonts'
import { getFlagSvgPath } from '../utils/flagHelper'


export class ApiIdRow extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        //pressed: false,
        //bracketOpacity: new Animated.Value(0),
      }

    this.sendPlayerDataRequest = this.sendPlayerDataRequest.bind(this)
    this.renderFlag = this.renderFlag.bind(this)

      /*
    this.selectPlayer = this.selectPlayer.bind(this)
    this.determineShowBrackets = this.determineShowBrackets.bind(this)
    this.bracketAnim = this.bracketAnim.bind(this)

    this.pulseDuration = 500
    */
  }

  sendPlayerDataRequest() {
    console.log("sendPlayerDataRequest for: " + this.props.name)
  }

  renderFlag(country) {
    console.log("renderFlag with country: " + country)
    const flagPath = getFlagSvgPath(country)
    const widthRatio = 4.0 / 3.0
    const flagHeight = 20
    const flagWidth = flagHeight * widthRatio

    return (
      <View>
        <Image
          style={{width: flagWidth, height: flagHeight, marginLeft: 7, opacity: 0.8}}
          source={{ uri: flagPath }}
        />
      </View>
    )
  }


   render() {

    return (
      <View style={Styles.playerRowContainer} >
        <View style={Styles.playerNameRowContainer} >
          <Text style={Fonts.players} onPress={this.sendPlayerDataRequest} >
            { this.props.name } { this.props.firstName }
          </Text>
        </View>
      </View>
    )
  }
}


/*

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
      <View style={Styles.playerDetailsContainer}>
        <View style={Styles.playerNameAndNationality}>
          <Text style={Fonts.playerDetails}>Nationality: { infos.nationality }</Text>
          { this.renderFlag(infos.nationality) }
        </View>
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

// render

    let { bracketOpacity } = this.state

    const showBrackets = this.determineShowBrackets()
    const selected = this.props.record.player.name === this.props.selectedPlayer ? true : false

    //console.log("playerData render() selected: " + selected)


export const ConnectedPlayerRow = connect((store) => ({
  selectedPlayer: store.app.selectedPlayer,
  dispatch: store.dispatch,
}))(PlayerRow)


*/
