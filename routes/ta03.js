//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
const http = require('https');

router.get('/:name?', (req, res, next) => {
  const url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';
  const { name = "" } = req.params
  http
  .get(url, (response) => {
    let body = "";
    response.on('data', (chunk) => {
      body += chunk;
    });
    response.on('end',  () => {
      const data = JSON.parse(body).filter(item => {
        if (!name) {
          return true
        }
        return item.name.toLowerCase().includes(name.toLowerCase())
      });
      res.render('pages/ta03', {
        title: 'Team Activity 03',
        path: '/ta03', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS,
        data,
      });
    });
  })
  .on('error', (e) => console.log('Got an error: ', e));
});

module.exports = router;
