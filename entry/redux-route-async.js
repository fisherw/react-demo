import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import barReducers from '../pages/redux-route-async/reducers/bar'
import fooReducers from '../pages/redux-route-async/reducers/foo'
import App from '../pages/redux-route-async/app'
import Foo from '../pages/redux-route-async/foo'
import Bar from '../pages/redux-route-async/bar'

const loggerMiddleware = createLogger();

// Add the reducer to your store on the `routing` key
const store = createStore(
    // reducers中定义的key就是访问store中数据的索引key值,如barreducer中有title的数据state, 在下面的合并中， 指定了bar这个key值,则实际
    // 通过state访问时,通过state.bar.title去访问
    combineReducers({
        bar: barReducers,
        foo: fooReducers,
        routing: routerReducer
    }),

    applyMiddleware(
        thunkMiddleware, // 允许我们 dispatch() 函数
        loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
    )
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <Router history={history}>
            <Route path="/test_redux_route_async" component={App}>
                <Route path="foo" component={Foo}/>
                <Route path="bar" component={Bar}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('react-app')
);