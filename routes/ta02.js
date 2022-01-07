const express = require('express');
const router = express.Router();

let users = ['one user']
let hasError = false;

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 0',
    path: 'ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS,
    users,
    hasError,
  });
});

router.post('/addUser', (req, res, next) => {
  const userToAdd = req.body.username;
  const isDuplicatedUser = users.includes(userToAdd)
  if (isDuplicatedUser) {
    hasError = true;
    res.redirect('/ta02/');
  } else {
    hasError = false;
    users.push(req.body.username)
    res.redirect('/ta02/');
  }

});

router.post('/removeUser', (req, res, next) => {
  const userToDelete = req.body.username;
  const hasUser = !users.includes(userToDelete)
  hasError += !!hasUser
  users = users.filter((user) => user !== req.body.username)
  res.redirect('/ta02/');
});

module.exports = router;
