const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers.js')
const attackAuthorization = require('../middleware/attackAuthorization')
const authentication = require('../middleware/authenticate')

router.post('/users/login', controller.login)
router.get('/randomwords',controller.getWords)
router.get('/user',controller.findByRoom)
router.use(authentication)
router.post('/user/attack/:id', attackAuthorization, controller.attack)



module.exports = router

/* 
    contoh http errors
=======================================================
    const createError = require(`http-errors`)

    if (err) throw createError (404, `File not found`)
*/