const express = require('express');
const router = express.Router();
const { findCourse } = require('../controller/fetchInfo')
const { findInstructor } = require('../controller/fetchInfo')

router.post('/findCourse', findCourse);
router.post('/findInstructor', findInstructor);

  module.exports = router