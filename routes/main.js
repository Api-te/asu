__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/babi', (req, res) => {
    res.sendFile(__path + '/views/upload.html')
})

router.get('/anjing', (req, res) => {
    res.sendFile(__path + '/views/asu.html')
})

module.exports = router
