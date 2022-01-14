const express = require('express');
const router = express.Router();

let users = ['one user']
let error = "";

router.get('/', (req, res, next) => {
  res.render('pages/prove01/form', {
    title: 'Prove Assignment 01',
    path: '/form',
    activeTA03: true,
    contentCSS: true,
  });
});

router.post('/display', (req, res, next) => {
  const { first, second } = req.body
  res.render('pages/prove01/display', {
    title: 'Prove Assignment 01',
    path: '/display',
    activeTA03: true,
    contentCSS: true,
    first,
    second,
  });
});


module.exports = router;
