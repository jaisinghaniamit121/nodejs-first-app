import http from "http";
import { generateLovePercent } from "./feature.js";
import fs from "fs"; //module
import path from "path"; //module

console.log(path.dirname("/home/random/index.html"));

// import { gfName1, gfName2, gfName3 } from "./feature.js";
// console.log(gfName1);
// console.log(gfName2);
// console.log(gfName3);

const readFilesync = fs.readFileSync("./index.html"); // Sync

console.log(generateLovePercent());
const server = http.createServer((req, res, next) => {
  if (req.url === "/") {
    console.log(req.method); // GET POST PUT DELETE
    fs.readFile("./index.html", (err, home) => {
      // Using Callback async
      res.end(`<h1>Home Page || ${home} ||  ${readFilesync}</h1> `);
    });
  } else if (req.url === "/about") {
    res.end(`<h1>Love is ${generateLovePercent()}</h1>`);
  } else if (req.url === "/contact") {
    res.end("<h1>Contact Page</h1>");
  } else {
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(8000, () => {
  console.log("Listening At 8000");
});
