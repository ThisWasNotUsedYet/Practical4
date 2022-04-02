/* eslint-disable new-cap */

const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(_req, res) {
  res.render('index', {title: 'Express'});
});

let lastvisit;
router.get('/last.txt', function(_req, res) {
  res.send(String(lastvisit));
  lastvisit = new Date();
});

// red, yellow, green, blue.
const colors = ['red', 'yellow', 'green', 'blue'];
let i = 0;
router.get('/color.html', (req, res) =>{
  res.send(`<!DOCTYPE html>
  <html lang = "en">
      <head>
      <meta charset = "UTF-8">
          <title>
              new title
          </title>
      </head>
      <body>
          <h1 style = "color: ${colors[i%4]}">${colors[i%4]}</h1>
      </body>
  </html>`);
  i++;
});
let j = 0;
router.get('/color.txt', (req, res)=>{
  res.send(`${colors[j%4]}`);
  j++;
});

let timeStamps = null;
router.get('/log.html', (_req, res)=>{
  const now = new Date();
  if (timeStamps === null) {
    timeStamps = `<li>${now}</li>`;
  } else {
    timeStamps +=`<li>${now}</li>`;
  }
  res.send(`<!DOCTYPE html>
  <html lang = "en">
      <head>
                <meta charset = "UTF-8">
          <title>

              new title
          </title>
      </head>
      <body>
          <ul>${timeStamps}</ul>
      </body>
  </html>`);
});


const timestamps = [];
router.get('/log.json', (req, res)=>{
  const now = new Date();
  timestamps.push(`${now}`);
  res.json(timestamps);
});

router.get('/log-ro.json', (req, res)=>{
  res.send(JSON.stringify(timestamps));
});


let boolean = false;
router.get('/first.html', (req, res)=>{
  if (!boolean) {
    res.send(`<!DOCTYPE html>
    <html lang = "en">
        <head>
        <meta charset = "UTF-8">

            <title>
                new title
            </title>
        </head>
        <body>
            <h1>Welcome</h1><a href = "/main.html">/main.html</a>
        </body>
    </html>`);
    boolean = true;
  } else {
    res.redirect('/main.html');
  }
});

router.get('/main.html', (req, res)=>{
  if (!boolean) {
    res.redirect('/first.html');
  } else {
    res.send(`<!DOCTYPE html>
    <html lang = "en">
        <head>
        <meta charset = "UTF-8">

            <title>
                new title
            </title>
        </head>
        <body>
            <h1>My main site</h1>
        <p>Some random text of your choice can be advertised over here.</p>
        </body>
    </html>`);
  }
});
router.get('/contact.ajax', (req, res)=>{
  const link = '<a href = "mailto:vishaldotgarwal@gmail.com">Email link</a>';
  res.send(`${link}`);
});
router.get('/search.ajax', (req, res)=>{
  const searchbar = '<input type = "text"></input> <button>search</search>';
  res.send(`${searchbar}`);
});

module.exports = router;
