
import React from 'react'
import { connect } from 'react-redux'

import { changeColor, changeBgColor} from './actions'
import { InputButton } from './inputButton'
import { ColorSpan } from './colorSpan'
import { BgColorSpan } from './bgColorSpan'



const App = React.createClass({
    //getInitialState: function () {
    //    return {
    //        color: 'red',
    //        bgColor: 'gray'
    //    };
    //},
    handleChangeColor: function (color) {
        this.props.dispatch(changeColor(color));
    },
    handleChangeBgColor: function (bgColor) {
        this.props.dispatch(changeBgColor(bgColor));
    },
    render: function () {
        let { initColor, initBgColor } = this.props,
            colorStyle = {
                color: initColor
            },
            bgColorStyle = {
                background: initBgColor
            };

        console.log('excute render function, initColor:', initColor, ' initBgColor:', initBgColor);

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


let select = function (state) {
    return {
        initColor: state.color,
        initBgColor: state.bgColor
    };
};

export default connect(select)(App);