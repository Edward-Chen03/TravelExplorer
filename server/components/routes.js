const express = require('express')
const { getLocation } = require('./userFunctions.js')
const router = express.Router()

router.get('/getLocation', getLocation);

module.exports = router;