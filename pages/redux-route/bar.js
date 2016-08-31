
var React = require('react');

import { connect } from 'react-redux'

const Bar = React.createClass({

    componentWillMount(){

    },
    componentDidMount: function () {

    },
    componentDidUpdate: function (prevProps) {

    },

    render: function () {
        return (
            <div>
                page Bar.
                <h2>{this.props.barTitle}</h2>
                <br/>
            </div>
        );
    }
});

let select = function (state) {
    return {
        barTitle: state.bar.title
    };
};

export default connect(select)(Bar);

//export default Bar;