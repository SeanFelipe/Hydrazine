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
    marginLeft: '40%',
    marginRight: '40%',
    marginBottom: 20,
  },
}
