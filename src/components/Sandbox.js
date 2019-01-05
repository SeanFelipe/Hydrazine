import React from 'react'
import {
  Platform,
  View,
  Text,
  Image,
  Animated,
  Dimensions,
  Easing,
} from 'react-native'

import { Expr } from '../css/styles'
import { SandboxStyles } from '../css/fonts'

import { getFlagSvgPath } from '../utils/flagHelper'


export class Sandbox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      opacity: new Animated.Value(0)
    }
  }

  render() {

    console.log("flag path for Liberia: " + getFlagSvgPath('Liberia'))

    return (
      <View>
        <View style={Expr.main}>
          <Text style={SandboxStyles.luckiest}>Box One</Text>
        </View>
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
