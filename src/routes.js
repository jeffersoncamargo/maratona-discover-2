var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    return res.render('index')
})

router.get('/jobs/create', (req, res) => {
    return res.render('job')
})

router.get('/jobs/edit/:id', (req, res, id) => {
    return res.render('job-edit')
})

router.get('/profile', (req, res) => {
    return res.render('profile')
})

module.exports = router