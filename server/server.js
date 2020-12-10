const http = require('http');
const url = require('url');
const jsonBody = require('body/json');
// const sendJson = require('send-data/json');
const utils = require('./custom_modules/utils');
const db = require('./database');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  var parsedUrl = url.parse(req.url, true);
  let pathName = parsedUrl.pathname;

  if (req.method === 'POST') {

    // get body data
    let body = jsonBody(req, res);
    console.log('body ', body)

    let validQuery = utils.handlePostRequest(pathName, body);

    if (!validQuery) {
      res.statusCode = 404;
      res.statusMessage = 'Page not found';
      res.end('Page not found');
    } else {
      res.setHeader('Content-Type', 'text/plain');
      let con = db.dbConnect('root', '', 'CookitDB', 'localhost');
      // await utils.queryResult(validQuery, con)
      res.end('Post request successful')
    }

  } else {

    // get body data
    let body = jsonBody(req, res);
      // if (err) {
      //   res.statusCode = 500;
      //   return res.end('Invalid body info');
      // }
      // return body;

    console.log('body ', body)

    let validQuery = utils.handleGetRequest(pathName, body);

    if (!validQuery) {
      res.statusCode = 404;
      res.statusMessage = 'Page not found';
      res.end('Page not found');
    } else {
      res.setHeader('Content-Type', 'text/json');
      // res.end(JSON.stringify(await utils.queryResult(validQuery, con)));
      // var response = [
      //   {
      //   "message": "Test GET request response"
      //   }]
      // res.end(JSON.stringify(response))
      res.end('Get request successful')
    }

  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

