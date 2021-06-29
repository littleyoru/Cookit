const http = require('http');
const url = require('url');
const jsonBody = require('body/json');
// const sendJson = require('send-data/json');
const utils = require('./custom_modules/utils');
const db = require('./database');

const hostname = '127.0.0.1';
const port = 3000;


http.createServer((req, res) => {
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
    const body = jsonBody(req, res)
    // body.then((err, bodyRes) = {

    // })
    console.log('bodyRes ', bodyRes)
    if (err) {
      res.statusCode = 500;
      return res.end('Invalid body info');
    }
    console.log(JSON.stringify(bodyRes))
    let validQuery = utils.handleGetRequest(pathName, bodyRes);
    console.log('validQuery ', validQuery)

    if (!validQuery) {
      res.statusCode = 404;
      res.statusMessage = 'Page not found';
      res.end('Page not found');

    } else {
      let con = db.dbConnect('root', '', 'CookitDB', 'localhost');
      con.query(validQuery, (err, data) => {
        if (err) {
          console.log('error in database ', err);
          res.setHeader('Content-Type', 'text/json');
          res.end('error!')
        }
        res.setHeader('Content-Type', 'text/json');
        res.end(JSON.stringify(data))
      })
      }
  }
})
.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



// http.createServer((req, res) => {
//   var parsedUrl = url.parse(req.url, true);
//   let pathName = parsedUrl.pathname;

//   if (req.method === 'POST') {

//     // get body data
//     let body = jsonBody(req, res);
//     console.log('body ', body)

//     let validQuery = utils.handlePostRequest(pathName, body);

//     if (!validQuery) {
//       res.statusCode = 404;
//       res.statusMessage = 'Page not found';
//       res.end('Page not found');
//     } else {
//       res.setHeader('Content-Type', 'text/plain');
//       let con = db.dbConnect('root', '', 'CookitDB', 'localhost');
//       // await utils.queryResult(validQuery, con)
//       res.end('Post request successful')
//     }

//   } else {

//     // get body data
//     jsonBody(req, res, (err, body) => {
//       if (err) {
//         res.statusCode = 500;
//         return res.end('Invalid body info');
//       }
//       console.log(JSON.stringify(body))

//       let validQuery = utils.handleGetRequest(pathName, body);

//       console.log('validQuery ', validQuery)

//       if (!validQuery) {
//         res.statusCode = 404;
//         res.statusMessage = 'Page not found';
//         res.end('Page not found');

//       } else {

//         let con = db.dbConnect('root', '', 'CookitDB', 'localhost');
//         con.query(validQuery, (err, data) => {
//           if (err) {
//             console.log('error in database ', err);
//             res.setHeader('Content-Type', 'text/json');
//             res.end('error!')
//           }
//           res.setHeader('Content-Type', 'text/json');
//           res.end(JSON.stringify(data))
//         })


//         // let response = await utils.queryResult(validQuery, con)
//         // res.end(JSON.stringify(utils.queryResult(validQuery, con)));
//         // res.setHeader('Content-Type', 'text/plain');
//         // res.end('Get request successful')
//       }
//     });
//   }
// })
// .listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

