const models = require('../models');
const async = require('async');

class AuthController {

    static async loginAction(req, res, next) {
        async.waterfall([
            (callback) => {
                models.UsersModel.findOne({ 'username': req.body.username }, callback);
            },
            (user, callback) => {
                if(user) {
                    user.checkPass(req.body.password, callback);
                } else {
                    callback(null, false);
                }
            }
        ], (err, result) => {
            if(err) console.log(err);
            
            if(result) {  
                res.send(true);
            } else {
                res.send(false);
            }
        });
    }

    static async regAction(req, res, next) {
        async.waterfall([
            (callback) => {
                models.RolesModel.findOne({ 'name':'unconfirmed' }, callback);
            },
            (role, callback) => {
                const post = req.body;
                const user = {
                    username: post.username,
                    password: post.password,
                    email: post.email,
                    role_id: role._id
                }

                const userModel = new models.UsersModel(user);

                userModel.save(callback);
            }
        ], (err) => {
            if(err){
                res.render('registration.view.ejs', {
                    message: 'Пользыватель уже зарегистрирыван!'
                });
            } else {
                res.send('Регистрация прошла успено!');
            }
        });
    }
}

module.exports = AuthController;