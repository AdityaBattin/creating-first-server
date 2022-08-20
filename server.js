const http = require("http");

const port = 8081;

http
  .createServer((request, responce) => {
    responce.writeHead(200, { "Content-Type": "text/html" });
    responce.write("<h1>Hello, this is from my server</h1>");
    responce.end();
  })
  .listen(port, () => {
    console.log(`Nodejs server stated on port ${port}`);
  });

//http://localhost:8081
