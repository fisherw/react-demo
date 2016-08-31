import React from 'react'

export const ColorSpan = React.createClass({
    //getInitialState: function () {
    //    return {
    //        colorStyle: this.props.colorStyle
    //    };
    //},
    //componentWillReceiveProps: function (nextProps) {
    //    this.setState({
    //        colorStyle: nextProps.colorStyle
    //    });
    //},
    render: function () {
        return (
            <span style={this.props.colorStyle}>{this.props.children}</span>
        );
    }
});