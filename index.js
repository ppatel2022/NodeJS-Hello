var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
 
    response.end(`Marketing lookup is Down, Response status : ${status} \n Name: ${firstName}  ${LastName} \n SSN: **${Last7Social} \n Offer Code: ${OfferCode} `);

});

var port = 80;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
