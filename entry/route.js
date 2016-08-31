var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRedirect = require('react-router').IndexRedirect,
    browserHistory = require('react-router').browserHistory,

    App = require('./../pages/route/app'),
    A = require('./../pages/route/a'),
    B = require('./../pages/route/b'),
    C = require('./../pages/route/c');

//var onEnter = function (nextState, replaceState) {
//    console.log('..before enter');
//    replaceState({nextPathname: nextState.location.pathname}, '/a');
//};

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/test_route" component={App}>
            <IndexRedirect to="/test_route/a" component={A}/>
            <Route path="/test_route/a" component={A}/>
            <Route path="/test_route/b" component={B}>
                <Route path="/test_route/c" component={C}/>
            </Route>
        </Route>
    </Router>
), document.getElementById('react-app'));