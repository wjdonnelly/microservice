var express = require('express');
var app = express();
var fs = require('fs');
var os = require('os');
var msconfig = JSON.parse(fs.readFileSync('msconfig.json', 'utf8'));

app.get('/urlRoutePath', function (req, res) {
 
  res.send(msconfig.urlRoutePath);
  
});

app.get('/*', function (req, res) {
 
  res.send(createDefaultResponse(req));
  
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  
  
  console.log('Listening at http://%s:%s', host, port);

});

function createDefaultResponse(req)
	{
	var requestDate = req.get('date');
	var contentLength = req.get('content-length');
	var systemDate = Date();
	
	
	return {
		hostName: os.hostname(),
		systemDate: systemDate,
		serviceName: msconfig.microserviceName,
		serviceInstanceId: msconfig.microserviceInstanceId,
		urlRoutePrefix: msconfig.urlRoutePrefix,
		requestUrl: req.url,
		requestMethod: req.method,
		httpVersion: req.httpVersion,
		requestDate: requestDate,
		
		requestIP: req.ip, 
		requestHostname: req.hostname,
		contentLength: contentLength
		
		};
	}

