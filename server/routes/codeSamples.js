const express = require('express');
const CodeSample = require('../models/CodeSample')

const router = express.Router();

// Route to get all countries
router.get('/', (req, res, next) => {
  CodeSample.find()
    .then(countries => {
      res.json(countries);
    })
    .catch(err => next(err))
});

// Route to add a CodeSample
router.post('/', (req, res, next) => {
  let { name, code } = req.body
  CodeSample.create({ name, code })
    .then(codeSample => {
      res.json({
        success: true,
        codeSample
      });
    })
    .catch(err => next(err))
});

module.exports = router;
