
var React = require('react'),

    BgColorSpan = require('./bgColorSpan'),
    ColorSpan = require('./colorSpan'),
    InputButton = require('./inputButton');

const App = React.createClass({
    getInitialState: function () {
        return {
            color: 'red',
            bgColor: 'gray'
        };
    },
    handleChangeColor: function (color) {
        this.setState({
            color: color
        });
    },
    handleChangeBgColor: function (bgColor) {
       this.setState({
            bgColor: bgColor
        });
    },
    render: function () {

        // var color = this.state.color,
        //     bgColor = this.state.bgColor;

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
                <h3>React with Redux Demo.</h3>
                <p>
                    这是一个文本,可以改变
                    <ColorSpan colorStyle={colorStyle}>颜色</ColorSpan>
                    和
                    <BgColorSpan bgColorStyle={bgColorStyle}>背景色</BgColorSpan>
                    的文本。
                </p>
                <InputButton btnName="改变颜色" onBtnClick={this.handleChangeColor}/>
                <InputButton btnName="改变背景色" onBtnClick={this.handleChangeBgColor}/>
            </div>
        );
    }
});

module.exports = App;