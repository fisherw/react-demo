import React from 'react'

export const BgColorSpan = React.createClass({
    //getInitialState: function () {
    //    return {
    //        bgColorStyle: this.props.bgColorStyle
    //    };
    //},
    //componentWillReceiveProps: function (nextProps) {
    //    this.setState({
    //        bgColorStyle: nextProps.bgColorStyle
    //    });
    //},
    render: function () {
        return (
            <span style={this.props.bgColorStyle}>{this.props.children}</span>
        );
    }
});