var fs = require('fs'),
    path = require('path'),
    express = require('express'),
    exphbs = require('express-handlebars'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),

    app = express();

// 配置常用变量
app.set('name', 'react-test-server');
app.set('version', '1.0.0');
app.set('mode', 'prod');
app.enable('trust proxy');

// 设置handlebars作为模板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true})),

root = path.resolve(__dirname, './public/'),
port = 5004;

// 日志打印

/**
 * current date
 */

logger.token('date', function getDateToken(req, res, format) {
    var date = new Date();

    switch (format || 'web') {
        case 'clf':
            return clfdate(date);
        case 'iso':
            return date.toISOString();
        case 'web':
            return date.toUTCString();
        case 'default':
            return date.toString();
    }
});

app.use(logger(':remote-addr - :remote-user [:date[default]] ":method :url HTTP/:http-version" ":referrer" ":user-agent" :status :res[content-length] - :response-time ms'));

// 启用静态文件处理中间件
app.use(
    express.static(root, {
        maxAge: 0,
        index: false,
        redirect: false
    })
);


// 配置监听端口
var serverOptions = [
    port
];

// 监听回调
serverOptions.push(function () {
    console.log('listening on port ', port);
});


// 配置访问路由
app.get('/', function (req, res){
    res.render('home', {
        page: req.query.page
    });
});

app.get('/test_route/*', function (req, res, next) {
    res.render('home', {
        page: 'route'
    });
});

app.get('/test_redux_route/*', function (req, res, next) {
    res.render('home', {
        page: 'redux-route'
    });
});

app.get('/test_redux_route_async/*', function (req, res, next) {
    res.render('home', {
        page: 'redux-route-async'
    });
});



app.get('/api/redux_async_action/title', function (req, res, next) {
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify({
        title: new Date().toString()
    }));
});

// 开启服务
app.listen.apply(app, serverOptions);