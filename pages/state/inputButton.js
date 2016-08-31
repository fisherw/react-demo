var React = require('react');

const InputButton = React.createClass({

    handleBtnClick: function (e) {
        var inputV = this.refs.input.value;

        if (this.props.onBtnClick) {
            this.props.onBtnClick(inputV);
        }
    },
    render: function () {
        return (
            <div>
                <input className="" id="" type="text" ref="input"/>
                <button onClick={this.handleBtnClick}>{this.props.btnName}</button>
            </div>
        );
    }
});

module.exports = InputButton;