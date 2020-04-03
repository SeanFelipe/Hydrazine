import { Platform, StyleSheet } from 'react-native'

const getFontRef = (tag) => {
  fontKeys = {
    patrick: ['Patrick Hand SC','patrickhandsc'],
    luckiest: ['Luckiest Guy','luckiestguy'],
    springfield: ['Springfield Demo','springfield'],
  }
  switch (Platform.OS) {
    case 'web':
      return fontKeys[tag][0]
    case 'ios':
      return fontKeys[tag][0]
    case 'android':
      return fontKeys[tag][1]
    default:
      return fontKeys[tag][0]
  }
}


export const SandboxStyles = StyleSheet.create({
  luckiest: {
    fontFamily: 'Patrick Hand SC',
    fontSize: 50,
    color:'#ddeedd',
  }
})


export const Fonts = StyleSheet.create({
  topScorersTitleText: {
    fontFamily: `${getFontRef('luckiest')}`,
    fontSize: 40,
    color:'#ddeedd',
  },
  players: {
    fontFamily: `${getFontRef('patrick')}`,
    //fontFamily: `${getFontRef('springfield')}`,
    color:'#ddeedd',
    fontSize: 30,
    //marginTop: 6,
    //marginBottom: 6,
  },
  playerDetails: {
    //fontFamily: `${getFontRef('patrick')}`,
    fontFamily: 'System',
    color:'#ddeedd',
    fontSize: 16,
  },
  introText: {
    fontFamily: `${getFontRef('luckiest')}`,
    //fontFamily: "Lato-Medium",
    //color:'#ee9999',
    color:'#ddeedd',
    fontSize: 36,
    margin: 2,
  },
  cl: {
    fontFamily: `${getFontRef('luckiest')}`,
    //fontFamily: "Lato-Medium",
    color:'#ddeedd',
    fontSize: 36,
    marginTop: 3,
    marginLeft: 2,
  },
  ient: {
    fontFamily: `${getFontRef('luckiest')}`,
    //fontFamily: "Lato-Medium",
    color:'#ddeedd',
    fontSize: 36,
    marginTop: 3,
  },
  menuText: {
    fontFamily: `${getFontRef('patrick')}`,
    //fontFamily: "Lato-Medium",
    //color:'#ee9999',
    color:'#cfccbb',
    fontSize: 30,
    margin: 2,
  },
  aboutScrollText: {
    fontFamily: `${getFontRef('patrick')}`,
    fontSize: 22,
    color:'#ddeedd',
  },
  backButton: {
    fontFamily: `${getFontRef('luckiest')}`,
    color:'#cfccbb',
    paddingTop: 8,
    paddingBottom: 2,
    fontSize: 24,
  },
  bracket: {
    marginTop: -10,
    marginLeft: 4,
    marginRight: 4,
    color: '#32cd32',
    fontSize: 50,
  },
})
