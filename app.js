var http = require(‘http’);
var url=require(‘url’);
http.createServer(
	function(request, response) {
		response.writeHead(200,{‘Content-Type’: ‘text/plain’});
		response.end()’Hello World\n’;
		response.end();
}