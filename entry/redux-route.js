import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import barReducers from '../pages/redux-route/reducers/bar'
import fooReducers from '../pages/redux-route/reducers/foo'
import App from '../pages/redux-route/app'
import Foo from '../pages/redux-route/foo'
import Bar from '../pages/redux-route/bar'

// Add the reducer to your store on the `routing` key
const store = createStore(
    // reducers中定义的key就是访问store中数据的索引key值,如barreducer中有title的数据state, 在下面的合并中， 指定了bar这个key值,则实际
    // 通过state访问时,通过state.bar.title去访问
    combineReducers({
        bar: barReducers,
        foo: fooReducers,
        routing: routerReducer
    })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <Router history={history}>
            <Route path="/test_redux_route" component={App}>
                <Route path="foo" component={Foo}/>
                <Route path="bar" component={Bar}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('react-app')
)