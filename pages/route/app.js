require('./app.css');

var React = require('react'),
    Link = require('react-router').Link;

const App = React.createClass({
    render: function () {
        return (
            <div className="main-wrapper">
                <div>................页面头部...........</div>
                <ol>
                    <li><Link to="/test_route/a" activeClassName="active">页面A</Link></li>
                    <li><Link to="/test_route/b" activeClassName="active">页面B</Link></li>
                    <li><Link to="/test_route/c" activeClassName="active">页面C</Link></li>
                </ol>
                <div>................页面主体...........</div>
                <div className="container">
                    {this.props.children}
                </div>
                <div>................页面底部...........</div>
            </div>
        );
    }
});

module.exports = App;