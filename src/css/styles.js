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
  },
  scorersScrollView: {
    flex: 1,
    marginTop: 20,
  },
  playerRowContainer: {
    //flex: 1,
  },
  playerNameRowContainer: {
    //flex: 1,
    //flexDirection: "row",
    //alignItems: "center",
  },
  playerDataContainer: {
    //flex: 1,
    //flexDirection: "column",
    //alignItems: "center",
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
  splashMenu: {
    flex: 8,
    alignItems: 'center',
    minWidth: 0,
    minHeight: 0,
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
  backButtonContainer: {
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#cfccbb',
    marginTop: 10,
    marginLeft: '40%',
    marginRight: '40%',
  },
}
