const express = require("express");
const utilities = require("../utilities");
const controller = require("../controllers");

const wrap = utilities.WrapperUtility.handle;
const db = utilities.DBUtility;

const router = express.Router();

router.get('/', wrap(controller.MainController.indexAction));
router.get('/auth/login', wrap(controller.AuthController.loginAction));
router.get('/auth/registration', wrap(controller.AuthController.registrationAction));
router.post('/auth/registration', wrap(controller.AuthController.registrationAction));



router.use((req, res, next) => {
    res.render('error.view.ejs', {
        title: 'Not Found',
        status: '404',
        message: 'Страница не найдена'
    });
});

module.exports = router;