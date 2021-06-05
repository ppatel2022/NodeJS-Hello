var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
 var status = 'Defined';
 var firstName = 'Paresh';
 var LastName = 'Patel';
 var Last7Social = '9843543';
 var OfferCode = '4343233';

    response.end(`Marketing lookup is Down, Response status : ${status} \n Name: ${firstName}  ${LastName} \n SSN: **${Last7Social} \n Offer Code: ${OfferCode} MY name is PARESH.`);
    
    
});

var port = 5000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
