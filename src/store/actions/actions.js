import * as Actions from '../constants';
import { initialDataCall } from '../../net/net'

export function increaseCounter (volume = 1) {
	return { type: Actions.IncreaseCounter, volume };
}

function setScreen(screen) {
  return {
    type: Actions.SET_SCREEN,
    screen
  }
}

function setInitialData (data) {
  return {
    type: Actions.SET_INITIAL_DATA,
    initialData: data
  }
}

function selectedPlayer (playerName) {
  return {
    type: Actions.SET_SELECTED_PLAYER,
    selectedPlayer: playerName
  }
}

export function setInitialScreen (startScreen) {
  return (dispatch) => {
    dispatch(setScreen(startScreen))
  }
}

export function changeScreen (screen) {
  return (dispatch) => {
    dispatch(setScreen(screen))
  }
}

export function handleInitialLoad () {
  return (dispatch) => {
    initialDataCall()
    .then((records) => {
      dispatch(setInitialData(records))
      dispatch(setScreen('Splash'))
    })
  }
}

export function home () {
  return (dispatch) => {
    dispatch(setScreen("Alpha"))
  }
}

export function getSelectedPlayer (playerName) {
  return (dispatch) => {
    dispatch(selectedPlayer(playerName))
  }
}

export function setSelectedPlayer (playerName) {
  return (dispatch) => {
    dispatch(selectedPlayer(playerName))
  }
}


