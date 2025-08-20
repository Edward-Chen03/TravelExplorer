const express = require('express')
const { putItem } = require('./userFunctions.js')
const router = express.Router()

router.get('/putItem', putItem);

module.exports = router;