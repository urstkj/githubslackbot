var express = require('express');
var bodyParser = require('body-parser');
var http = require('http-request');
var Channels = require('./Channels');
var UsersNames = require('./UsersNames');

var app = express();
app.use(bodyParser.json());

app.use('/images', express.static('images'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/githubwebhook', function (req, res) {
  var options = {
    host: 'https://hooks.slack.com',
    port: '80',
    path: '/services/T0PH4H8HF/B27FTSHNU/lhtlf7KhtM2NrviLnuG8mUeg',
    method: 'POST',
  }



  if (req.body.action === 'labeled' || req.body.action === 'unlabeled') {
    var message = getResponse(req.body);
    var label = req.body.label.name;
     if (req.body.action === 'labeled') {
      switch (label) {
        case 'Ready For Review':
        case 'Approved +1':
        case 'Last Call':
          sendSlackMessage(req, message);
          break;
        default:
          break;
      }
    } else {
      if (label === 'Don\'t Merge') {
        sendSlackMessage(req, message);
      }
    }
  }

  if (req.body.action === 'closed' && req.body.pull_request.merged) {
    var authorName = UsersNames[req.body.sender.login] || req.body.sender.login
    sendSlackMessage(req, {
      text: ':merged: ' + req.body.pull_request.html_url + ' by ' + authorName,
      username: 'Git Status'
    });
  }


  res.json(message);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});

function sendSlackMessage(req, message) {
    http.post({
      url: Channels[req.body.repository.name],
      headers: {
        'Content-Type': 'application/json'
      },
      reqBody: new Buffer(JSON.stringify(message))
    }, function(error, res){

    });
}

function getResponse(body) {

  var labelColor = '#' + body.label.color;
  var authorName = UsersNames[body.sender.login] || body.sender.login;
  var authorIcon = body.sender.avatar_url;
  var title = body.pull_request.title + ' #' + body.number;
  var pullRequestURL = body.pull_request.html_url;
  var text = 'The label `' + body.label.name + '` has been ' + (body.action == 'labeled' ? 'added.' : 'removed' )



  return {
    username: 'Git Status - ' + body.repository.name,
    attachments: [
      {
        color: labelColor,
        "author_name": authorName,
        "author_icon": authorIcon,
        "title": title,
        "title_link": pullRequestURL,
        "image_url": 'http://damp-springs-39574.herokuapp.com/images/' + body.label.name.replace(/ /g, '%20') + '.png',
        "ts": Date.now()/1000,
        mrkdwn_in: ['text']
      }
    ]
  }
}

