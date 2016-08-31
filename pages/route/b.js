var React = require('react');

const B = React.createClass({
    render: function () {
        return (
            <div>
                <h4>页面B</h4>
                <div>...子页面....:</div>
                {this.props.children ? this.props.children: '无'}
            </div>
        );
    }
});

module.exports = B;