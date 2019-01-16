import React from 'react'
import { connect } from 'react-redux'
import { Platform, View, Text } from 'react-native'
import * as appActions from './../store/actions/actions';

import { ConnectedDisplayScreen } from './DisplayScreen'
import { ConnectedSplashScreen } from './SplashScreen'
import { ConnectedAboutScreen } from './AboutScreen'
import { SearchyScreen } from './SearchyScreen'
import { Sandbox } from './Sandbox'

import { Styles } from '../css/styles'

import LuckiestGuyFont from '../../assets/fonts/luckiestguy.ttf'
import PatrickHandFont from '../../assets/fonts/patrickhandsc.ttf'


class Alpha extends React.Component {
  constructor(props) {
    super(props)
    //console.log("Alpha constructor() for platform: " + Platform.OS)

    this.nav = this.nav.bind(this)
    this.loadFontsForRNWeb = this.loadFontsForRNWeb.bind(this)
  }

  componentDidMount() {
    Platform.OS === 'web' ? this.loadFontsForRNWeb() : null
    this.props.dispatch(appActions.handleInitialLoad())
    //this.props.dispatch(appActions.handleInitialLoad('Display'))
    //this.props.dispatch(appActions.setInitialScreen('Searchy'))
  }

  loadFontsForRNWeb() {

    const FontStyles = `
    @font-face {
      src: url(${PatrickHandFont});
      font-family: Patrick Hand SC;
    }
    @font-face {
      src: url(${LuckiestGuyFont});
      font-family: Luckiest Guy;
    }
  `;

    const style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = FontStyles;
    } else {
      style.appendChild(document.createTextNode(FontStyles));
    }

    document.head.appendChild(style);
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
      case 'Search':
        return <SearchyScreen />
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
