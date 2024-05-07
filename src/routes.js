const express = require('express')
const router = express.Router();

const BasicController = require('./controllers/BasicController')

router.get('/getAll',BasicController.sAll)

module.exports = router;