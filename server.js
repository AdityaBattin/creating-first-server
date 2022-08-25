const http = require("http");

const port = 8081;
// no persistance  in server as soon as the server is off line it goes back to orignal state so we need databases

const todoList = ["Go to bed", "Love Mahi"];

http
  .createServer((req, res) => {
    //call back function for request responce
    //http methords
    const { method, url } = req; //destructuring  JS
    //http methords..
    //1. GET (to get data from server)
    //2. POST (to get data to server)
    //3. PATCH (To update some data from ether side)
    //4. PUT (OVER WRITING A DATA)
    //5. DELETE (Deleting data from server)
    // default request is UNDEFINED
    // console.log(methord, url);
    // res.end();

    if (url === "/todos") {
      res.writeHead(200, { "Content-Type": "text/html" });
      if (method === "GET") {
        //In My case GET is not Default it is undefined
        //arrays are not text so first convert in text format using toString() methord
        res.write(todoList.toString());
      } else if (method === "POST") {
        let body = "";
        req
          .on("error", (err) => {
            console.error(err);
          })
          .on("data", (chunk) => {
            body += chunk; //adding data onto body
            console.log(chunk);
          })
          .on("end", () => {
            body = JSON.parse(body);
            let newtoDo = todoList;
            newtoDo.push(body.item);
            console.log(newtoDo);
            res.writeHead(201);
          });
      } else if (method === "DELETE") {
        let body = "";
        req
          .on("error", (err) => {
            console.error(err);
          })
          .on("data", (chunk) => {
            body += chunk;
          })
          .on("end", () => {
            body = JSON.parse(body); //converting it and storing it in the same variable
            let deletethis = body.item;

            // TO traverse an array and delete an item
            // for (let i = 0; i < todoList.length; i++) {
            //   if (todoList[i] === deletethis) {
            //     todoList.splice(i, 1);
            //     break;
            //   }
            // }

            // different methodology
            todoList.find((element, index) => {
              if (element === deletethis) {
                todoList.splice(index, 1); // to delete an item on index i
              }
            });
            res.writeHead(202);
          });
      } else {
        res.write("<h1>  ERROR  :(  </h1>");
      }
      res.end();
    } else {
      res.writeHead(404);
    }
  })
  .listen(port, () => {
    //call back fuction
    console.log(`Nodejs server stated on port ${port}`);
  });

//http://localhost:8081/todos
