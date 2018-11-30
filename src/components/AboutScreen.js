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

import { About, Expr } from './styles'


class AboutScreen extends React.Component {
  constructor(props) {
    super(props)

    this.textAnimDuration = 3000

    this.sw = Dimensions.get('window').width
    this.sh = Dimensions.get('window').height
    this.endy = 100
    this.starty = this.sh -200
    //this.endy = this.sh -100


    this.state = {
      ypos: new Animated.Value(this.starty),
      textOpacity: new Animated.Value(0),
    }

    this.textAttempt = 'An attempt to show some ReactJS skills.'
    this.textApi = 'API data from football-data.org.'
    this.textRedux= 'Screen management with Redux.'
    this.textPlatform = 'Cross-platform web/android/ios with react-universal-ui.'
    this.textAnimations = 'Animations with React Native Animated toolkit.'
    this.textZero = 'Inspiration from Zero Wing.'
    this.textJustice = '... for great justice.'

    this.allTexts = [
      this.textAttempt,
      this.textApi,
      this.textRedux,
      this.textPlatform,
      this.textZero,
      this.textJustice
    ]

    this.startTextAnim = this.startTextAnim.bind(this)
    this.startFadeAnim = this.startFadeAnim.bind(this)

  }

  componentDidMount() {
    this.startTextAnim(this.state.ypos)
    this.startFadeAnim(this.state.textOpacity, 1500)
  }

  startTextAnim(val, duration) {
    return (
      Animated.timing(
        val, {
          toValue: this.endy,
          duration: this.textAnimDuration,
        }
      )
    ).start()
  }

  startFadeAnim(val, duration) {
    Animated.timing(
      val, {
        toValue: 1,
        duration: duration,
      }
    ).start()
  }

  render() {

    const mainViewStyle = {
      width: this.sw,
      height: this.sh,
      borderColor: '#accaf9',
      borderWidth: 2,
    }

    return (
      <View style={mainViewStyle}>
        <Animated.View style={{
          opacity: this.state.textOpacity,
          top: this.state.ypos,
        }} >
          <Text>{this.textAttempt}</Text>
        </Animated.View>
      </View>
    )
  }
}

  /*

export class Sandbox extends React.Component {
  constructor(props) {
    super(props)

    this.animDuration = 1500
    this.textDuration = 1000

    const xfactor = 0.8
    const yfactor = 0.5
    this.scx = Dimensions.get('window').width
    this.scy = Dimensions.get('window').height
    this.sx = this.scx * xfactor
    this.sy = this.scy * yfactor

    this.fontx = 30
    this.fonty = 20


    console.log(`sx sy: ${this.sx} ${this.sy}`)

    this.state = {
      fy: new Animated.Value(0),
      opacityData: new Animated.Value(0),
      opacityClient: new Animated.Value(0),
    }

    this.futbolAnim = this.futbolAnim.bind(this)
    this.makeTextAnim = this.makeTextAnim.bind(this)

    this.dataTextAnim = this.makeTextAnim(this.state.opacityData, 500)
    this.clientTextAnim = this.makeTextAnim(this.state.opacityClient, 500)
  }

   componentDidMount() {
     this.futbolAnim()
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

  makeTextAnim(val, delay) {
    return (
      Animated.timing(
        val, {
          toValue: 1,
          delay
        }
      )
    )
  }


  render() {

    let ballStyle = {
      marginTop: this.state.fy
    }

    const dims = {
      width: this.sx,
      height: this.sy,
    }

    const introFontContainer = {
      position: 'absolute',
      flex: 1,
      flexDirection: 'row',
      top: this.fonty,
      left: this.fontx
    }

    console.log("dims: " + JSON.stringify(dims))

    let animStyle = Object.assign(Expr.animContainer, dims)

    console.log("animStyle: " + JSON.stringify(animStyle))

//<Text style={introTextFont}>Client</Text>
    return (
      <View>
        <View style={Expr.animContainer}>
          <Animated.View style={ballStyle}>
            <SoccerBall />
          </Animated.View>
        </View>
        <Animated.View style={introFontContainer}>
          <Text style={Expr.introText}>Futbol</Text>
          <Animated.View style={{opacity: this.state.opacityData}}>
            <Text style={Expr.introText}>Data</Text>
          </Animated.View>
        </Animated.View>
      </View>
    )
  }
}
  */

export const ConnectedAboutScreen = connect((store) => ({
  dispatch: store.dispatch,
}))(AboutScreen)
