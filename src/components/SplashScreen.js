import React from 'react'
import { connect } from 'react-redux'

import {
  View,
  Text,
  Image,
  Animated,
  Dimensions,
  Easing,
} from 'react-native'

import { changeScreen } from '../store/actions/actions'
import { Expr } from '../css/styles'
import { Fonts } from '../css/fonts'


class SplashScreen extends React.Component {
  constructor(props) {
    super(props)

    this.animDuration = 1500
    this.textDuration = 1000
    this.changeScreenFadeOutDuration = 1000

    const xfactor = 0.8
    const yfactor = 0.8
    this.scx = Dimensions.get('window').width
    this.scy = Dimensions.get('window').height
    this.sx = this.scx * xfactor
    this.sy = this.scy * yfactor



    this.state = {
      fy: new Animated.Value(-200),
      opacityTop: new Animated.Value(1),
      opacityFutbol: new Animated.Value(0),
      opacityData: new Animated.Value(0),
      opacityCl: new Animated.Value(0),
      opacityIe: new Animated.Value(0),
      opacityNt: new Animated.Value(0),
      opacityTopScorers: new Animated.Value(0),
      opacitySearch: new Animated.Value(0),
      opacityAbout: new Animated.Value(0),
    }

    this.futbolAnim = this.futbolAnim.bind(this)
    this.startTextAnim = this.startTextAnim.bind(this)
    this.startFadeIn = this.startFadeIn.bind(this)
    this.startFadeOut = this.startFadeOut.bind(this)
    this.startPulsingAnim = this.startPulsingAnim.bind(this)

    this.triggerDisplayScreen = this.triggerDisplayScreen.bind(this)
    this.triggerSearchScreen = this.triggerSearchScreen.bind(this)
    this.triggerAboutScreen = this.triggerAboutScreen.bind(this)
  }

  componentDidMount() {
    this.futbolAnim()
    this.startTextAnim(this.state.opacityFutbol, 500)
    this.startTextAnim(this.state.opacityData, 1000)
    this.startTextAnim(this.state.opacityCl, 1300)
    this.startTextAnim(this.state.opacityIe, 1400)
    this.startTextAnim(this.state.opacityNt, 1500)
    this.startFadeIn(this.state.opacityTopScorers, 2000)
    this.startFadeIn(this.state.opacitySearch, 2500)
    this.startFadeIn(this.state.opacityAbout, 3000)
    setInterval(() => { this.startPulsingAnim(this.state.opacityTopScorers) }, 6000)
    setInterval(() => { this.startPulsingAnim(this.state.opacitySearch) }, 5000)
    setInterval(() => { this.startPulsingAnim(this.state.opacityAbout) }, 4000)
  }


  soccerBall () {
    return (
      <Image
        style={{width: 50, height: 50}}
        source={require('../../assets/img/soccerball.svg.png')}
      />
    )
  }

  triggerDisplayScreen() {
    this.startFadeOut(this.state.opacityTop, this.changeScreenFadeOutDuration)
    setTimeout(() => { this.props.dispatch(changeScreen('Display')) }, this.changeScreenFadeOutDuration)
  }

  triggerSearchScreen() {
    console.log("triggerSearchScreen()")
    this.startFadeOut(this.state.opacityTop, this.changeScreenFadeOutDuration)
    setTimeout(() => { this.props.dispatch(changeScreen('Search')) }, this.changeScreenFadeOutDuration)
  }

  triggerAboutScreen() {
    this.startFadeOut(this.state.opacityTop, this.changeScreenFadeOutDuration)
    setTimeout(() => { this.props.dispatch(changeScreen('About')) }, this.changeScreenFadeOutDuration)
  }



  futbolAnim() {
    Animated.timing(
      this.state.fy, {
        toValue: this.sy,
        duration: this.animDuration,
        easing: Easing.bounce,
      }
    ).start()
  }

  startTextAnim(val, delay) {
    Animated.timing(
      val, {
        toValue: 1,
        delay
      }
    ).start()
  }

  startFadeIn(val, delay) {
    fadeIn = Animated.timing(
      val, {
        toValue: 1,
        delay
      }
    ).start()
  }

  startFadeOut(val, duration) {
    console.log("startFadeOut() with duration: " + duration)
    Animated.timing(
      val, {
        toValue: 0,
        duration,
      }
    ).start()
  }

  startPulsingAnim(val) {
    Animated.sequence([
      Animated.timing(val, {
        toValue: 0,
        duration: 1500,
      }),
      Animated.timing(val, {
        toValue: 1,
        duration: 800,
      }),
    ]).start()
  }

  render() {
    let ballStyle = {
      marginTop: this.state.fy
    }

    const introFontContainer = {
      flex: 1,
      flexDirection: 'row',
      bottom: 120,
    }


    return (
      <Animated.View style={{ opacity: this.state.opacityTop }}>
        <View style={Expr.animContainer}>
          <View style={Expr.flex}>
            <Animated.View style={ballStyle}>
              { this.soccerBall() }
            </Animated.View>
          </View>
          <View id="spec-id">
            <Text></Text>
          </View>
          <Animated.View style={introFontContainer}>
            <Animated.View style={{opacity: this.state.opacityFutbol}}>
              <Text style={Fonts.introText}>React</Text>
            </Animated.View>
            <Animated.View style={{opacity: this.state.opacityData}}>
              <Text style={Fonts.introText}></Text>
            </Animated.View>
            <Animated.View style={{opacity: this.state.opacityCl}}>
              <Text style={Fonts.cl}>Hy</Text>
            </Animated.View>
            <Animated.View style={{opacity: this.state.opacityIe}}>
              <Text style={Fonts.ient}>dra</Text>
            </Animated.View>
            <Animated.View style={{opacity: this.state.opacityNt}}>
              <Text style={Fonts.ient}>zine</Text>
            </Animated.View>
          </Animated.View>
          <View style={Expr.splashMenu}>
            <Animated.View style={{opacity: this.state.opacityTopScorers}}>
              <Text
                style={Fonts.menuText}
                onPress={this.triggerDisplayScreen}
              >
                An extention
              </Text>
            </Animated.View>
            <Animated.View style={{opacity: this.state.opacitySearch}}>
              <Text
                style={Fonts.menuText}
                onPress={this.triggerSearchScreen}
              >
                To React Native for Web
              </Text>
            </Animated.View>
            <Animated.View style={{opacity: this.state.opacityAbout}}>
              <Text
                style={Fonts.menuText}
                onPress={this.triggerAboutScreen}
              >
                And React Universal
              </Text>
            </Animated.View>
          </View>
        </View>
      </Animated.View>
    )
  }
}

export const ConnectedSplashScreen = connect((store) => ({
  dispatch: store.dispatch,
}))(SplashScreen)
