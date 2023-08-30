const http = require("http");

const fs = require("fs").promises;

const requestListener = function(req, res) {
  console.log(req.url);
};

if (req.url === "/") {
  fs.readfile( __dirname + "/work.html" )
  .then( contents => { res.setHeader( "Content-Type", "text/html; charset=UTF-8");
    res.writeHead(200);
    res.end(contents);           
  })
  } 
else {
   fs.readfile( __dirname + "/work.json")
  .then(contents => 
    { res.setHeader("Content-Type", "application/json; charset=UTF-8");
    res.writeHead(200);
    res.end(contents);           
  });
  } 
  


const server = http.createServer(requestListener);
const host = "0.0.0.0";
const port = "8080";

server.listen(
  port,
  host,
  () => {
    console.log("server is running");
    
  }
);