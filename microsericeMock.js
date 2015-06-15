var express = require('express');
var app = express();
var fs = require('fs');
var os = require('os');

app.get('/*', function (req, res) {
 
  res.send(createResponseJson(req));
  
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  
  
  console.log('Listening at http://%s:%s', host, port);

});

function createResponseJson(req)
	{
	var requestDate = req.get('date');
	var contentLength = req.get('content-length');
	var systemDate = Date();
	var microserviceId = fs.readFileSync('microserviceId.txt', 'utf8');
	
	return {
		hostName: os.hostname(),
		systemDate: systemDate,
		microserviceId: microserviceId,
		url: req.url,
		method: req.method,
		baseUrl: req.baseUrl,
		httpVersion: req.httpVersion,
		requestDate: requestDate,
		
		requestingIP: req.ip, 
		requestHostname: req.hostname,
		contentLength: contentLength
		
		};
	}

