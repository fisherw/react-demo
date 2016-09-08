
var React = require('react');

import { connect } from 'react-redux'
import { barAsync } from './actions/bar'


const Bar = React.createClass({

    componentWillMount(){

    },
    componentDidMount: function () {

    },
    componentDidUpdate: function (prevProps) {

    },

    handleAClick: function (e) {
        this.props.dispatch(barAsync());
    },

    render: function () {
        return (
            <div>
                page Bar.
                <h2>{this.props.barTitle}</h2>
                <a onClick={this.handleAClick}>点击触发action</a>
                <br/>
            </div>
        );
    }
});

let select = function (state) {
    return {
        // 这里的state.bar是取决于在创建store时的reducers注册名(此时为bar)
        barTitle: state.bar.title
    };
};

export default connect(select)(Bar);

//export default Bar;