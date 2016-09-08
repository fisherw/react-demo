var request = require('superagent');

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


export function barAsync (params) {
    return function (dispatch) {

        // 异步调用获取数据,然后触发action
        request.get('/api/redux_async_action/title')
            .query(params || {})
            .end(function (err, res) {
                dispatch(barb(res.body.title));
            });
    };
}