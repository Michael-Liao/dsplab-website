const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const {User} = require('../models');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/register', async function (req, res) {
  // validation done is the front end
  // hash password
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
  } catch (e) {
    res.send(e);
  } finally {
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (e) {
      console.log(e.errors[0].message);
      res.status(400).send(e.errors[0].message);
    }
  }
});

module.exports = router;
