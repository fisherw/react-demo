
var React = require('react');

import { connect } from 'react-redux'

const Foo = React.createClass({

    componentWillMount(){

    },
    componentDidMount: function () {

    },
    componentDidUpdate: function (prevProps) {

    },

    render: function () {
        return (
            <div>
                page Foo.
                <h2>{this.props.fooName}</h2>
                <br/>
            </div>
        );
    }
});

let select = function (state) {
    return {
        fooName: state.foo.name
    };
};

export default connect(select)(Foo);

//export default Foo;