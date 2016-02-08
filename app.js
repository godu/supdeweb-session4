var express = require('express');
var serveStatic = require('serve-static');
var compression = require('compression');

var app = express();

var YEAR = 1 * 1000* 60 * 60 * 24 * 365;
var SECOND = 1 * 1000;

app.get('/A.jpg', compression(), sendFile('img/A.jpg', YEAR));
app.get('/B.bmp', compression(), sendFile('img/B.bmp', SECOND));
app.get('/E.css', sendFile('blog.min.css', YEAR));
app.get('/F.css', compression(), sendFile('css/bootstrap.css', SECOND));
app.get('/G.js', sendFile('js/bootstrap.js', YEAR));
app.get('/H.js', sendFile('js/jquery.min.js', SECOND));
app.get('/C.jpg', compression(), sendFile('img/C.jpg', SECOND));
app.get('/D.jpg', compression(), sendFile('img/D.jpg', YEAR));
app.get('/', compression(), sendFile('index.html', SECOND));

app.get('/answer/A.jpg', compression(), sendFile('img/A-compressed.jpg', YEAR));
app.get('/answer/B.jpg', compression(), sendFile('img/B.jpg', YEAR));
app.get('/answer/E.css', compression(), sendFile('blog.min.css', YEAR));
app.get('/answer/F.css', compression(), sendFile('css/bootstrap.min.css', YEAR));
app.get('/answer/G.js', compression(), sendFile('js/bootstrap.min.js', YEAR));
app.get('/answer/H.js', compression(), sendFile('js/jquery.min.js', YEAR));
app.get('/answer/C.jpg', compression(), sendFile('img/C.jpg', YEAR));
app.get('/answer/D.jpg', compression(), sendFile('img/D-resized.jpg', YEAR));
app.get('/answer', compression(), sendFile('answer.html', YEAR));

function sendFile(n, ma, etag) {
  return function(req, res, next) {
    res.sendFile(n, {
      maxAge: ma || 0,
      root: __dirname + '/public'
    });
  }
}


app.listen(3000);
