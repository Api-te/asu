__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/upload', (req, res) => {
    res.sendFile(__path + '/views/upload.html')
})

module.exports = router
