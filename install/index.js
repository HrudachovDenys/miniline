const async = require("async");
const mongoose = require("../utilities").mongooseUtility;

const {
    RolesModel,
    UsersModel
} = require('../models');

async.series([
    open,
    dropDB,
    initRoles,
    createAdmin,
    getPrivilege,
    close
], (err, res) => {
    if(err) throw err;

    console.log(res);
})

function open(callback){
    mongoose.connection.once("open", callback);
}

function dropDB(callback){
    const db = mongoose.connection.db;
    db.dropDatabase(callback);
}

function initRoles(callback){
    const roles = [
        { _id: new mongoose.Types.ObjectId(), name: "unconfirmed" },
        { _id: new mongoose.Types.ObjectId(), name: "user" },
        { _id: new mongoose.Types.ObjectId(), name: "moderator" },
        { _id: new mongoose.Types.ObjectId(), name: "admin" }
    ];

    async.each(roles, (data, callback) => {
        let role = new RolesModel(data);

        role.save((err) => {
            callback(err, role);
        });
    }, callback);
}

function createAdmin(callback) {
    RolesModel.findOne({ 'name':'admin' })
        .exec((err, role) => {
            if (err) return console.log(err);
            
            const admin = { 
                username: "admin", 
                password: "123",
                email: "a@a.ru",
                role_id: role._id
            };

            const model = new UsersModel(admin);
            model.save((err) => {
                callback(err, model);
                console.log('Admin is created!');
            });
        });
}

function getPrivilege(callback){
    UsersModel.findOne({ 'username' : 'admin' })
        .exec((err, user) => {
            if (err) return console.log(err);

            RolesModel.findOne({ '_id' : user.role_id })
                .exec((err, role) => {
                    if (err) return console.log(err);

                    callback(err, role.name);
                });
        });
}

function close(callback){
    mongoose.disconnect(callback);
}