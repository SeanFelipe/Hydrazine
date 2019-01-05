import React from 'react'
import { connect } from 'react-redux'
import { Platform, View, Text } from 'react-native'
import * as appActions from './../store/actions/actions';

import { ConnectedDisplayScreen } from './DisplayScreen'
import { ConnectedSplashScreen } from './SplashScreen'
import { ConnectedAboutScreen } from './AboutScreen'
import { Sandbox } from './Sandbox'

import { Styles } from '../css/styles'


class Alpha extends React.Component {
  constructor(props) {
    super(props)
    this.nav = this.nav.bind(this)
    console.log("Alpha constructor() for platform: " + Platform.OS)
  }

  componentDidMount() {
    //this.props.dispatch(appActions.handleInitialLoad())
    //this.props.dispatch(appActions.handleInitialLoad('Display'))
    this.props.dispatch(appActions.setInitialScreen('Sandbox'))
  }

  nav(tag) {
    // switch doens't seem to work in JSX so here's a helper function
    switch (tag) {
      case 'Loading':
        return <ConnectedSplashScreen />
      case 'Splash':
        return <ConnectedSplashScreen />
      case 'Display':
        return <ConnectedDisplayScreen />
      case 'Team':
        return <ConnectedTeamScreen />
      case 'Sandbox':
        return <Sandbox />
      case 'About':
        return <ConnectedAboutScreen />
      default:
        return <Text>No screen selected.</Text>
    }
  }

  render() {
    return (
      <View style={Styles.verticalCenterParent}>
        { this.nav(this.props.activeScreen) }
      </View>
    )
  }
}

export const ConnectedAlpha = connect((store) => ({
  activeScreen: store.app.activeScreen,
  dispatch: store.dispatch,
}))(Alpha)
