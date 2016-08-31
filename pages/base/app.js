
var React = require('react');

const App = React.createClass({
    getInitialState: function () {
        return {
            color: 'red',
            bgColor: 'gray'
        };
    },
    componentWillMount(){

    },
    componentDidMount: function () {

    },
    componentDidUpdate: function (prevProps) {

    },
    handleChangeColor: function () {
        var color = this.refs.color.value;

        this.setState({
            color: color
        });
    },
    handleChangeBgColor: function (e) {
        var bgColor = this.refs.bgColor.value;

        this.setState({
            bgColor: bgColor
        });
    },
    render: function () {
        let { color, bgColor } = this.state,
            colorStyle = {
                color: color
            },
            bgColorStyle = {
                background: bgColor
            };

        console.log('excute render function, initColor:', color, ' initBgColor:', bgColor);

        return (
            <div>
                React with Redux Demo.
                <br/>

                <p>这是一个文本,可以改变
                    <span style={colorStyle}>颜色</span>
                    和
                    <span style={bgColorStyle}>背景色</span>
                    的文本。</p>
                <br/>

                <input type="text" ref="color"/>
                <button onClick={this.handleChangeColor}>改变颜色</button>

                <input type="text" ref="bgColor"/>
                <button onClick={this.handleChangeBgColor}>改变背景色</button>
            </div>
        );
    }
});

module.exports = App;