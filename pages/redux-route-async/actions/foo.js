import {FOOA, FOOB} from '../constants'

export function fooa (name) {
    return {
        type: FOOA,
        name: name
    };
}


export function foob (name) {
    return {
        type: FOOB,
        name: name
    }
}