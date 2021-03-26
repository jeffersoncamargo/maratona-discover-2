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
    return res.render('profile', {
        profile: {
            "name": "Jefferson Camargo",
            "avatar": "https://avatars.githubusercontent.com/u/2170855?v=4",
            "monthly-budget": "3000,00",
            "hours-per-day": 6,
            "days-per-week": 5,
            "vacation-per-year": 5
        }
    })
})

module.exports = router