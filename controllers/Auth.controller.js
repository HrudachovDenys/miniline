const models = require('../models');

class AuthController {
    static async loginAction(req, res, next) {
        res.render('login.view.ejs');
    }

    static async registrationAction(req, res, next) {
        let message = "";

        if(Object.keys(req.body).length > 0) {
            if(req.body.password != req.body.confirmPassword) {
                message = 'Пароли не совпадают'
            } else {
                const role = await models.RolesModel.findOne({ 'name':'unconfirmed' }).exec();

                const post = req.body;
                const user = {
                    username: post.username,
                    password: post.password,
                    email: post.email,
                    role_id: role._id
                }

                const userModel = new models.UsersModel(user);
                try {
                    await userModel.save();
                    res.render('message.view.ejs', {
                        title: 'New User!',
                        message: 'Регистрация прошла успешно!'
                    });
                } catch(err) {
                    message = 'Пользыватель уже зарегистрирыван!';
                }
            }
        }

        res.render('registration.view.ejs', {
            message: message
        });
    }
}

module.exports = AuthController;