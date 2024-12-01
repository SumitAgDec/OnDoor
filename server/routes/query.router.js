const { Router } = require('express')
const { submitQuery, getQuery } = require('../controllers/query.controller')

const router = Router()

router.post('/', submitQuery)
router.get('/getquery', getQuery)

module.exports = router