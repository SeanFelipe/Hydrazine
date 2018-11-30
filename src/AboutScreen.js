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

    this.textAnimDuration = 7000
    this.fadeDuration = 2000
    this.fadeOutBeginTime = this.textAnimDuration - this.fadeDuration
    this.timeBetweenScrollers = 2000

    this.sw = Dimensions.get('window').width
    this.sh = Dimensions.get('window').height
    this.endy = 100
    this.starty = this.sh -200
    //this.endy = this.sh -100


    this.state = {
      //ypos: new Animated.Value(this.starty),
      //textOpacity: new Animated.Value(0),
      opacities: {},
      ypositions: {},
    }

    this.strings = {
      attempt     : 'An attempt to demonstrate some ReactJS skills.',
      api         : 'API data from football-data.org.',
      redux       : 'Screen management with Redux.',
      platform    : 'Cross-platform web/android/ios with react-universal-ui.',
      animations  : 'Animations with React Native Animated toolkit.',
      zero        : 'Inspiration from Zero Wing.',
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
    console.log("opacities: " + JSON.stringify(this.state.opacities))
    console.log("ypositions: " + JSON.stringify(this.state.ypositions))
    this.beginAnimationChain()
  }

  initializeAnims() {
    ops = {foo: 'bar'}
    ypos = {baz: 'ish'}

    Object.keys(this.strings).map((tag) => {
      ops[tag] = new Animated.Value(0)
      ypos[tag] = new Animated.Value(0)
    })

    console.log("initializeAnims: " + JSON.stringify(ops))
    console.log("initializeAnims: " + JSON.stringify(ypos))
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
      //setTimeout(() => { this.fadeIn(tag) }, beginTime)
      //setTimeout(() => { this.fadeOut(tag) }, endTime)

      timingOffset += this.timeBetweenScrollers
    })
  }


  startScrollingAnim(val) {
    console.log("startScrollingAnim() for val: " + JSON.stringify(val))
    console.log("props: " + JSON.stringify(this.state.ypositions[val]))

    return (
      Animated.timing(
        this.state.ypositions[val], {
          toValue: this.endy,
          duration: this.textAnimDuration,
          easing: Easing.linear,
        }
      )
    ).start()
  }

  fadeIn(val) {
    Animated.timing(
      val, {
        toValue: 1,
        duration: this.fadeDuration,
      }
    ).start()
  }

  fadeOut(val, duration) {
    Animated.timing(
      val, {
        toValue: 0,
        duration: this.fadeDuration,
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
        {
          Object.keys(this.strings).map((tag, index) => {
            console.log("about: " + tag)
            //let opacity = this.state.opacities[tag]
            let top = this.state.ypositions[tag]
            let opacity = 1
            //let top = 400
            const comment = this.strings[tag]

            return (
              <Animated.View key={index} style={{ opacity, top }} >
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
