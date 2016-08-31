
var React = require('react');

const App = React.createClass({
    // 初始化
    getDefaultProps: function () {
        console.log('set default props');

        return {
            title: '我是默认props标题'
        };
    },
    getInitialState: function () {
        console.log('set default state');
        return {
            title: '我是默认state标题'
        };
    },
    // 装载
    componentWillMount(){
        console.log('componentWillMount');
    },
    componentDidMount: function () {
        console.log('componentDidMount');

        console.log('wait 3 seconds');
        // 触发更新
        setTimeout(function () {
            console.log('will update state value....');
            this.props.title = '我是新props标题';
            this.setState({
                title: '我是新state标题'
            });

            // 能更新吗
            console.log('will update props');

        }.bind(this), 10000);
    },
    // 更新
    componentWillReceiveProps: function (nextProps) {
        console.log('componentWillReceiveProps.', ' nextProps:', nextProps, ' now props:', this.props);
    },
    shouldComponentUpdate: function () {
        console.log('shouldComponentUpdate');

        // 返回值为true时允许更新操作
        return false;
    },
    componentWillUpdate: function () {
        console.log('componentWillUpdate');
    },
    componentDidUpdate: function (prevProps) {
        console.log('componentDidUpdate.', ' prevProps:', prevProps, ' now props:', this.props);
    },

    // 卸载
    componentWillUnmount: function () {
        console.log('componentWillUnmount');
    },

    // 渲染
    render: function () {
        console.log('excute render function');
        return (
           <div>
               React Life Cycle demo.
               <h2>{this.state.title}</h2>
               <h2>{this.props.title}</h2>
           </div>
        );
    }
});

module.exports = App;