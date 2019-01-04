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
    const yfactor = 0.4
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
      opacityAbout: new Animated.Value(0),
    }

    this.soccerBall = this.soccerBall.bind(this)
    this.futbolAnim = this.futbolAnim.bind(this)
    this.startTextAnim = this.startTextAnim.bind(this)
    this.startFadeIn = this.startFadeIn.bind(this)
    this.startFadeOut = this.startFadeOut.bind(this)
    this.startPulsingAnim = this.startPulsingAnim.bind(this)

    this.triggerDisplayScreen = this.triggerDisplayScreen.bind(this)
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
    this.startFadeIn(this.state.opacityAbout, 2500)
    setInterval(() => { this.startPulsingAnim(this.state.opacityTopScorers) }, 4000)
    setInterval(() => { this.startPulsingAnim(this.state.opacityAbout) }, 4750)
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
    console.log("TDS()")
    this.startFadeOut(this.state.opacityTop, this.changeScreenFadeOutDuration)
    setTimeout(() => { this.props.dispatch(changeScreen('Display')) }, this.changeScreenFadeOutDuration)
  }

  triggerAboutScreen() {
    this.props.dispatch(changeScreen('About'))
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

      /*
    const dims = {
      width: this.sx,
      height: this.sy,
    }
    */
    //console.log("dims: " + JSON.stringify(dims))

    // animContainer needs dynamically made dimensions
    //Object.assign(Expr.animContainer, dims)


    return (
      <Animated.View style={{ opacity: this.state.opacityTop }}>
        <View style={Expr.animContainer}>
          <View style={Expr.flex}>
            <Animated.View style={ballStyle}>
              { this.soccerBall() }
            </Animated.View>
          </View>
          <Animated.View style={introFontContainer}>
            <Animated.View style={{opacity: this.state.opacityFutbol}}>
              <Text style={Fonts.introText}>Futbol</Text>
            </Animated.View>
            <Animated.View style={{opacity: this.state.opacityData}}>
              <Text style={Fonts.introText}>Data</Text>
            </Animated.View>
            <Animated.View style={{opacity: this.state.opacityCl}}>
              <Text style={Fonts.cl}>Cl</Text>
            </Animated.View>
            <Animated.View style={{opacity: this.state.opacityIe}}>
              <Text style={Fonts.ient}>ie</Text>
            </Animated.View>
            <Animated.View style={{opacity: this.state.opacityNt}}>
              <Text style={Fonts.ient}>nt</Text>
            </Animated.View>
          </Animated.View>
          <View style={Expr.splashMenu}>
            <Animated.View style={{opacity: this.state.opacityTopScorers}}>
              <Text
                style={Fonts.menuText}
                onPress={this.triggerDisplayScreen}
              >
                Top Scorers
              </Text>
            </Animated.View>
            <Animated.View style={{opacity: this.state.opacityAbout}}>
              <Text
                style={Fonts.menuText}
                onPress={this.triggerAboutScreen}
              >
                About
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
