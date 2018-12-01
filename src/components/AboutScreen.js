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
import { About, Expr } from './styles'

import { ConnectedBackButton } from './BackButton'


class AboutScreen extends React.Component {
  constructor(props) {
    super(props)

    this.textAnimDuration = 20000
    this.fadeDuration = 2000
    //this.fadeOutBeginTime = this.textAnimDuration - this.fadeDuration
    this.fadeOutBeginTime = 6000
    this.timeBetweenScrollers = 3000

    this.backButtonFadeInTime = 7000

    this.sw = Dimensions.get('window').width
    this.sh = Dimensions.get('window').height
    this.pad = 300
    this.starty = - ( this.sh - 400 )
    this.endy = 300


    this.state = {
      opacities: {},
      ypositions: {},
    }

    this.strings = {
      attempt     : 'An attempt to demonstrate some ReactJS skills.',
      api         : 'API data from football-data.org.',
      redux       : 'State management for screens + data by Redux.',
      platform    : "React-Universal-UI\nfor web + mobile builds\nfrom the same codebase!",
      animations  : 'Animations with React Native Animated toolkit.',
      zero        : 'Inspiration from Zero Wing...',
      justice     : '...for great justice.',
    }

    this.backButton = this.backButton.bind(this)

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

  backButton() {
    this.props.dispatch(changeScreen('Splash'))
  }

  initializeAnims() {
    ops = {
      backButton: new Animated.Value(0)
    }

    ypos = {}

    Object.keys(this.strings).map(tag => {
      ops[tag] = new Animated.Value(0)
      ypos[tag] = new Animated.Value(this.starty)
    })

    console.log("ops: " + JSON.stringify(ops))

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

    setTimeout(() => { this.fadeIn('backButton') }, this.backButtonFadeInTime)
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
    console.log("fadeIn(): " + val)
    Animated.timing(
      this.state.opacities[val], {
        toValue: 1,
        duration: this.fadeDuration,
      }
    ).start()
  }

  fadeOut(val) {
    //console.log("fadeOut() for val: " + val)
    Animated.timing(
      this.state.opacities[val], {
        toValue: 0,
        duration: this.fadeDuration,
      }
    ).start()
  }

  render() {
    const mainViewStyle = {
      flex: 1,
      justifyContent: 'flex-start',
      flexDirection: 'column',
      alignItems: 'center',
      width: this.sw,
      height: this.sh * 0.7,
      //borderColor: '#accaf9',
      //borderWidth: 2,
    }


    const backButtonContainerStyle = Object.assign(
      About.backButtonContainer,
      { opacity: this.state.opacities.backButton }
    )

    return (
      <View>
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
        <View >
          <Animated.View style={ backButtonContainerStyle}>
            <ConnectedBackButton />
          </Animated.View>
        </View>
      </View>
    )
  }
}


export const ConnectedAboutScreen = connect((store) => ({
  dispatch: store.dispatch,
}))(AboutScreen)
