
import { combineReducers } from 'redux'
import { actionTypes } from './actions'

function color(state = 'red', action) {
    switch (action.type) {
        case actionTypes.CHANGE_COLOR:
            return action.color;
        default:
            return state;
    }
}

function bgColor(state = 'gray', action) {
    switch (action.type) {
        case actionTypes.CHNAGE_BACKGROUND_COLOR:
            return action.bgColor;
        default:
            return state;
    }
}

export const fontApp = combineReducers({
    color,
    bgColor
});