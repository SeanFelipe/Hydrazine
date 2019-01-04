import { Platform } from 'react-native'

const PLAT = Platform.OS

const getFontRef = (tag) => {
  fontKeys = {
    patrick: ['Patrick Hand SC','patrickhandsc'],
    luckiest: ['Luckiest Guy','luckiestguy'],
    luckiest: ['Luckiest Guy','luckiestguy'],
  }
  switch (tag) {
    case 'patrick'
  }


}



export const Fonts = StyleSheet.create({
  topScorersTitleText: {
    fontFamily: 'Luckiest Guy',
    fontSize: 50,
    color:'#ddeedd',
  },
    players: {
    flex: 1,
     fontFamily: `${getFontRef('patrick')}`,
     //fontFamily: "Lato-Medium",
    //color:'#ee9999',
    color:'#ddeedd',
    fontSize: 35,
    marginTop: 6,
    marginBottom: 6,
  },
  playerDetails: {
    fontFamily: "System",
    //fontFamily: "Lato",
    color:'#ddeedd',
    fontSize: 18,
  },
})

export const ExprFonts = StyleSheet.create({
  introText: {
    fontFamily: `${getFontRef('luckiest')}`,
    //fontFamily: "Lato-Medium",
    //color:'#ee9999',
    color:'#ddeedd',
    fontSize: 45,
    margin: 2,
  },
  cl: {
    fontFamily: `${getFontRef('luckiest')}`,
    //fontFamily: "Lato-Medium",
    color:'#ddeedd',
    fontSize: 45,
    marginTop: 3,
    marginLeft: 2,
  },
  ient: {
    fontFamily: `${getFontRef('luckiest')}`,
    //fontFamily: "Lato-Medium",
    color:'#ddeedd',
    fontSize: 45,
    marginTop: 3,
  },
     menuText: {
    fontFamily: `${getFontRef('patrick')}`,
     //fontFamily: "Lato-Medium",
    //color:'#ee9999',
    color:'#cfccbb',
    fontSize: 35,
    margin: 2,
  },
})

export const AboutFonts = {
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
}
