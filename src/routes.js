const express = require('express')
const router = express.Router();

const BasicController = require('./controllers/BasicController')

router.get('/getAll',BasicController.sAll)
router.post('/getOne',BasicController.sOne)
router.post('/createUser',BasicController.createUser)

module.exports = router;