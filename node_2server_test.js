var os = require('os');
console.log('test0');
var output = getContainerInfo();
console.log(output);
function getContainerInfo () {
	return {
		hostnane: os.hostname(),
		process: process.execPath,
		//timeZOneOffset: new Date().getTimeZoneOffset(),
		processTitle: process.title
	};

}