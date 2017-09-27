var express = require('express');

//Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    console.log('next');
    next();
  } else {
    console.log('redirect: ' +'http://' + req.hostname + req.url);
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
})
