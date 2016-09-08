
var React = require('react');

const App = React.createClass({

    componentWillMount(){

    },
    componentDidMount: function () {

    },
    componentDidUpdate: function (prevProps) {

    },

    render: function () {
        return (
            <div>
                React with react-redux-router and dispatch async action Demo.
                <br/>
                {this.props.children}
            </div>
        );
    }
});

export default App;