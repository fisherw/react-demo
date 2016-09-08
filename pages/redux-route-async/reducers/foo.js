import { FOOA, FOOB } from '../constants'

const initialState = {
    name: 'nothing'
}

export default function name(state = initialState, action) {
    if(action.type === FOOA) {
        return { name: 'fooa ' + action.name }
    }
    else if(action.type === FOOB) {
        return { name: 'foob' + action.name }
    }
    return state
}