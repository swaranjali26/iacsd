const http = require("http");
const url = require("url");
const querystring = require("querystring");
const fs = require("fs");
var processRequest = (req,resp) => {
const p = url.parse(req.url);
switch(p.pathname)
{
  case "/":
fs.readFile("index.html",(err,data)=>{
if(err)
{
console.log("failed to load");
}
else{
resp.end(data);
}
});
break;
case "/validate":
const q = querystring.parse(p.query);
resp.end(q.name+" login successfully");

break;
}
}
const server = http.createServer(processRequest);
server.listen(7070);
console.log("server started");