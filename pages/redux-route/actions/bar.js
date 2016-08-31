import {BARA, BARB} from '../constants'

export function bara (title) {
    return {
        type: BARA,
        title: title
    };
}


export function barb (title) {
    return {
        type: BARB,
        title: title
    }
}