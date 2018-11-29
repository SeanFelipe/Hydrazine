import { combineReducers } from 'redux';
import * as Actions from '../constants';


const initialState = {
  activeScreen: 'Loading',
  selectedPlayer: 'NO_PLAYER_SELECTED_YET',
}


function appReducer (state=initialState, action) {
  switch (action.type) {

    case Actions.IncreaseCounter:
      return { ...state, counter: state.counter + action.volume };

    case Actions.GET_SELECTED_PLAYER:
      return state.selectedPlayer;

    case Actions.SET_INITIAL_DATA:
      return { ...state,
        initialData: action.initialData,
        loading: false
      };

    case Actions.SET_SCREEN:
      return { ...state,  activeScreen: action.screen };

    case Actions.SET_SELECTED_PLAYER:
      return { ...state,  selectedPlayer: action.selectedPlayer};

    default:
      return state;

  }
};

export default combineReducers({
  app: appReducer
});
