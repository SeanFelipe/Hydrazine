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
    marginTop: 30,
  },
  scrollViewContainer: {
    flex: 1,
    marginTop: 50,
  },
  playerNameRowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  playerDetailsContainer: {
    alignSelf: "center",
  },
  playerNameAndNationality: {
    flexDirection: "row"
  },
})

export const Expr = {
  rowStyle: {
    flex: 1,
    flexDirection: 'row',
  },
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
  },
  boxy: {
    flex: 1,
    backgroundColor: '#ff0000',
  },
}

export const About = {
  /*
  backButtonContainer: {
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#cfccbb',
    marginLeft: '40%',
    marginRight: '40%',
    marginBottom: 20,
  },
  */
  backButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 10,
    left: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#cfccbb',
    paddingLeft: 4,
    paddingRight: 4,
  },
  searchRun: {
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#cfccbb',
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: 40,
    paddingRight: 4,
    paddingLeft: 4,
  },
}

export const SearchStyles = {
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row1of3: {
    backgroundColor: "0x0000ff",
    //borderWidth: 3,
    flex: 1
  },
  blueBox: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    width: 100,
    height: 50,
    top: 10,
    left: 10,
    backgroundColor: 'powderblue',
  },
  backButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 10,
    left: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#cfccbb',
    padding: 8,
  },
}
