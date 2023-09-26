const express = require('express');
const router = express.Router();
const { addClass } = require('../controller/register');

router.post('/classReg', addClass
  );

  module.exports = router