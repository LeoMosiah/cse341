const express = require('express');
const router = express.Router();

let users = ['one user']
let error = "";

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 0',
    path: 'ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS,
    users,
    error,
  });
});

router.post('/addUser', (req, res, next) => {
  error = "";
  const userToAdd = req.body.username;
  const isDuplicatedUser = users.includes(userToAdd)
  if (isDuplicatedUser) {
    error = "Duplicated Entry";
    res.redirect('/ta02/');
  } else {
    hasError = false;
    users.push(req.body.username)
    res.redirect('/ta02/');
  }

});

router.post('/removeUser', (req, res, next) => {
  error = "";
  const userToDelete = req.body.username;
  const hasUser = users.includes(userToDelete)
  error = !hasUser ? "User do not exist" : "";
  users = users.filter((user) => user !== req.body.username)
  res.redirect('/ta02/');
});

module.exports = router;
