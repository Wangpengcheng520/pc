var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    var url = req.url;

    switch (url) {
        case '/':
            fs.readFile('index.html', 'utf-8', function (err, data) {
                if (err) {
                    console.log('读取失败');
                    console.log(err);
                } else {
                    res.writeHead(200, {'content-type': 'text/html;charset=utf8'});
                    res.end(data);
                }
            })
            break;
        case '/index.html':
            fs.readFile('index.html', 'utf-8', function (err, data) {
                if (err) {
                    console.log('读取失败');
                    console.log(err);
                } else {
                    res.writeHead(200, {'content-type': 'text/html;charset=utf8'});
                    res.end(data);
                }
            })
            break;
        case '/index.css':
            fs.readFile('index.css', 'utf-8', function (err, data) {
                if (err) {
                    console.log('读取失败');
                    console.log(err);
                } else {
                    res.writeHead(200, {'content-type': 'text/css;charset=utf8'});
                    res.end(data);
                }
            })
            break;
        case '/index.js':
            fs.readFile('index.js', 'utf-8', function (err, data) {
                if (err) {
                    console.log('读取失败');
                    console.log(err);
                } else {
                    res.writeHead(200, {'content-type': 'text/javascript;charset=utf8'});
                    res.end(data);
                }
            })
            break;
        case '/1.png':
            fs.readFile('1.png', function (err, data) {
                if (err) {
                    console.log('读取失败');
                    console.log(err);
                } else {
                    res.writeHead(200, {'content-type': 'image/png'});
                    res.end(data);
                }
            })
            break;
        case '/demo.html':
            fs.readFile('demo.html', 'utf-8', function (err, data) {
                if (err) {
                    console.log('读取失败');
                    console.log(err);
                } else {
                    res.writeHead(200, {'content-type': 'text/html;charset=utf8'});
                    res.end(data);
                }
            })
            break;
        case '/img.html':
            fs.readFile('img.html', 'utf-8', function (err, data) {
                if (err) {
                    console.log('读取失败');
                    console.log(err);
                } else {
                    res.writeHead(200, {'content-type': 'text/html;charset=utf8'});
                    res.end(data);
                }
            })
            break;
        default:
            res.end('404 not find');
    }


}).listen(3000);