import { BARA, BARB } from '../constants'

const initialState = {
    title: 'default'
}

export default function title(state = initialState, action) {
    if(action.type === BARA) {
        return { title: 'bara ' + action.title }
    }
    else if(action.type === BARB) {
        return { title: 'barb' + action.title }
    }
    return state
}