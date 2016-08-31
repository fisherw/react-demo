
import React from 'react'
import ReactDOM from 'react-dom'
import App from './../pages/redux/app'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { fontApp } from './../pages/redux/reducers'

let store = createStore(fontApp);

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('react-app'));