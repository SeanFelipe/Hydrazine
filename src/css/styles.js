import { StyleSheet } from 'react-native';

export const IndexStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#34495e',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Alpha = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'center'
  },
  flexOnly: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },

  locationFilter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  locationButton: {
    flex: 1,
    marginRight: 4,
    marginLeft: 4,
  },

  scroller: {
    flex: 10,
    marginTop: 60,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 4,
    borderColor: '#accaf9',
  },

  filter: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  filterTextInput: {
    textAlign: 'center',
    borderWidth: 1,
    fontSize: 24,
  },

  studentsRetrieved: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,

  },
  studentsRetrievedText: {
    marginTop: 1
  },
});


export const Styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexOnly: {
    flex: 1,
  },
  verticalCenterParent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topScorersTitleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 4,
    //borderColor: '#accaf9',
  },
  topScorersTitleText: {
    fontFamily: 'Luckiest Guy',
    fontSize: 50,
    color:'#ddeedd',
  },
  scorersScrollView: {
    flex: 1,
    marginTop: 20,
    //maxHeight: '50%',
    //maxWidth: '50%',
  },
 playerRowContainer: {
    flex: 1,
  },
  playerNameRowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  playerDataContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
   bracket: {
    color: '#32cd32',
    fontSize: 45,
  },
  players: {
    flex: 1,
     fontFamily: "Patrick Hand SC",
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

export const StudentInfoStyles = StyleSheet.create({
  players: {
    borderColor: '#ee0000',
    backgroundColor:'#778899',
    alignItems:'center',
    justifyContent:'center',
  },

  textViewContainer: {
    flex: 3,
    alignItems:'center',
    justifyContent:'center',
    margin: 3,
  },

  textViewText: {
    color: '#FFFFFF',
    fontSize: 20,
  },

  goButton: {
    flex: 1,
    marginTop: 3,
    marginRight: 4,
    backgroundColor: '#dddddd',
    borderRadius: 4,
  },
})


export const MatchStudentStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  topView: {
    alignItems: 'flex-start',
    flex: 1,
  },
  midView: {
    flex: 2,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#dddddd',
    borderRadius: 4,
  },
  studentData: {
    flex: 1,
    marginTop: 4,
    marginLeft: 2,
    marginRight: 1,
  },
  nameText: {
    fontSize: 24,
  },
  checkInText: {
    marginTop: 6,
    fontSize: 18,
  },
  clearButton: {
    flex: 1,
    flexDirection: 'row',
  },
  checkInButton: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    flex: 5,
  },
  text: {
    fontSize: 24,
  },
  editText: {
    borderWidth: 4,
    borderColor: '#accaf9',
    fontSize: 24,
  },
  checkIn: {
    fontSize: 24,
    backgroundColor: '#dddddd',
  },
})

export const DropoffInfoBoxStyles = {
  editTop: {
    flex: 1,
    alignItems: 'center',
  },
  editText: {
    flex: 6,
    borderWidth: 4,
    borderColor: '#accaf9',
    fontSize: 24,
  },
}

export const Expr = {
  flex: {
    flex: 7,
  },
  animContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 2,
    //borderColor: '#ff33ff',
  },
  introText: {
    fontFamily: "Luckiest Guy",
    //fontFamily: "Lato-Medium",
    //color:'#ee9999',
    color:'#ddeedd',
    fontSize: 45,
    margin: 2,
  },
  cl: {
    fontFamily: "Luckiest Guy",
    //fontFamily: "Lato-Medium",
    color:'#ddeedd',
    fontSize: 45,
    marginTop: 3,
    marginLeft: 2,
  },
  ient: {
    fontFamily: "Luckiest Guy",
    //fontFamily: "Lato-Medium",
    color:'#ddeedd',
    fontSize: 45,
    marginTop: 3,
  },
  splashMenu: {
    flex: 8,
    alignItems: 'center',
    minWidth: 0,
    minHeight: 0,
  },
   menuText: {
    fontFamily: "Patrick Hand SC",
     //fontFamily: "Lato-Medium",
    //color:'#ee9999',
    color:'#cfccbb',
    fontSize: 35,
    margin: 2,
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#003300',
  },
  boxy: {
    flex: 1,
    backgroundColor: '#ff0000',
  },
}

export const About = {
  aboutScrollText: {
    fontFamily: 'Patrick Hand SC',
    fontSize: 22,
    color:'#ddeedd',
  },
  backButtonContainer: {
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#cfccbb',
    marginTop: 10,
    marginLeft: '40%',
    marginRight: '40%',
  },
   backButton: {
    fontFamily: "Luckiest Guy",
    color:'#cfccbb',
     paddingTop: 8,
    paddingBottom: 2,
    fontSize: 24,
  },
}

export const Fonts = StyleSheet.create({
  size100: {
    fontSize: 100,
  },
  luckiest: {
    fontFamily: "Luckiest Guy",
    textAlign: "center",
    margin: 10
  },
   futura: {
    fontFamily: "Futura",
    fontSize: 100 ,
    textAlign: "center",
    margin: 10
  },
  system: {
    fontFamily: 'System',
    fontSize: 20,
    color:'#ddeedd',
  },
  ruboto: {
    fontFamily: 'Ruboto',
    fontSize: 20,
    color:'#ddeedd',
  },
  lato: {
    fontFamily: 'Lato-Medium',
    fontSize: 20,
    color:'#ddeedd',
  },
  chalkduster: {
    fontFamily: 'Chalkduster',
    fontSize: 20,
    color:'#ddeedd',
  },
  patrickSc: {
    fontFamily: 'Patrick Hand SC',
    fontSize: 50,
    color:'#ddeedd',
  },
 })
