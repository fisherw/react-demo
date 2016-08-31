var React = require('react');

const ColorSpan = React.createClass({
    getInitialState: function () {
        return {
            colorStyle: this.props.colorStyle
        };
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            colorStyle: nextProps.colorStyle
        });
    },
    render: function () {
        return (
            <span style={this.state.colorStyle}>{this.props.children}</span>
        );
    }
});

module.exports = ColorSpan;