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

    this.textAnimDuration = 20000
    this.fadeDuration = 2000
    //this.fadeOutBeginTime = this.textAnimDuration - this.fadeDuration
    this.fadeOutBeginTime = 6000
    this.timeBetweenScrollers = 3000

    this.sw = Dimensions.get('window').width
    this.sh = Dimensions.get('window').height
    this.pad = 300
    this.starty = - ( this.sh - this.pad )
    this.endy = 300


    this.state = {
      opacities: {},
      ypositions: {},
    }

    this.strings = {
      attempt     : 'An attempt to demonstrate some ReactJS skills.',
      api         : 'API data from football-data.org.',
      redux       : 'State management for screens + data by Redux.',
      platform    : 'ruui.cool for web + mobile builds from the same codebase',
      animations  : 'Animations with React Native Animated toolkit.',
      zero        : 'Inspiration from Zero Wing...',
      justice     : '...for great justice.',
    }

    this.startScrollingAnim = this.startScrollingAnim.bind(this)
    this.fadeIn = this.fadeIn.bind(this)
    this.fadeOut = this.fadeOut.bind(this)
    this.initializeAnims = this.initializeAnims.bind(this)
    this.beginAnimationChain = this.beginAnimationChain.bind(this)
  }

  componentDidMount() {
    this.initializeAnims()
    this.beginAnimationChain()
  }

  initializeAnims() {
    ops = {}
    ypos = {}

    Object.keys(this.strings).map(tag => {
      ops[tag] = new Animated.Value(0)
      ypos[tag] = new Animated.Value(this.starty)
    })

    this.setState({
      opacities: ops,
      ypositions: ypos
    })
  }

  beginAnimationChain() {
    let timingOffset = 0

    Object.keys(this.strings).map((tag) => {
      const beginTime = timingOffset
      const endTime = beginTime + this.fadeOutBeginTime

      setTimeout(() => { this.startScrollingAnim(tag) }, beginTime)
      setTimeout(() => { this.fadeIn(tag) }, beginTime)
      setTimeout(() => { this.fadeOut(tag) }, endTime)

      timingOffset += this.timeBetweenScrollers
    })
  }

  startScrollingAnim(val) {
    Animated.timing(
      this.state.ypositions[val], {
        toValue: this.endy,
        duration: this.textAnimDuration,
        easing: Easing.linear,
      }
    ).start()
  }

  fadeIn(val) {
    Animated.timing(
      this.state.opacities[val], {
        toValue: 1,
        duration: this.fadeDuration,
      }
    ).start()
  }

  fadeOut(val) {
    console.log("fadeOut()")
    Animated.timing(
      this.state.opacities[val], {
        toValue: 0,
        duration: this.fadeDuration,
      }
    ).start()
  }

  render() {

    const mainViewStyle = {
      width: this.sw,
      height: this.sh,
      //borderColor: '#accaf9',
      //borderWidth: 2,
    }

    return (
      <View style={mainViewStyle}>
        {
          Object.keys(this.strings).map((tag, index) => {
            let ypos = this.state.ypositions[tag]
            let opacity = this.state.opacities[tag]
            const comment = this.strings[tag]

            return (
              <Animated.View key={index} style={
                {
                  bottom: ypos,
                  opacity,
                }} >
                <Text style={About.scrollText}>{comment}</Text>
              </Animated.View>
            )
          })
        }
      </View>
    )
  }
}


export const ConnectedAboutScreen = connect((store) => ({
  dispatch: store.dispatch,
}))(AboutScreen)
