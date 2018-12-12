const express = require("express");
const utilities = require("../utilities");
const controller = require("../controllers");

const wrap = utilities.WrapperUtility.handle;
const db = utilities.DBUtility;

const router = express.Router();

router.post('/auth/login', wrap(controller.AuthController.loginAction));
router.post('/auth/reg', wrap(controller.AuthController.regAction));


router.use((req, res, next) => {
    res.render('error.view.ejs', {
        title: 'error',
        status_code: res.statusCode,
        message: res.statusMessage
    });
});

module.exports = router;