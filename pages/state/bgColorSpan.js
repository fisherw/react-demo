var React = require('react');

const BgColorSpan = React.createClass({
    getInitialState: function () {
        return {
            bgColorStyle: this.props.bgColorStyle
        };
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            bgColorStyle: nextProps.bgColorStyle
        });
    },
    render: function () {
        return (
            <span style={this.state.bgColorStyle}>{this.props.children}</span>
        );
    }
});

module.exports = BgColorSpan;