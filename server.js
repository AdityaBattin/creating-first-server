const http = require("http");

const port = 8081;

http
  .createServer((req, res) => {
    //call back function for request responce
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello, this is from my server :)</h1>");
    res.end();
  })
  .listen(port, () => {
    //call back fuction
    console.log(`Nodejs server stated on port ${port}`);
  });

//http://localhost:8081
