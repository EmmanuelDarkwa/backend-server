const http = require('http');

const handleAllRequests = (requestObject, responseObject) => {
    console.log('Hi, I just recieved all requests');
    
    const url = requestObject.url;
    if(url === '/'){
            responseObject.write("<h1>Welcome to the home page</h1>")
    } else if(url === '/login'){
        responseObject.write("<h1>Welcome to Login page</h1>")
    } else if(url === '/signup'){
        responseObject.write("<h2>Welcome to Sign up Page</h2>")
    }else{
        responseObject.write("<h1>Please there's no page here</h1>");
    }
    responseObject.end();
}

const server = http.createServer(handleAllRequests);

server.listen(3000, '127.0.0.1', ()=> console.log('Server is ready'));