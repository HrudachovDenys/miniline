const bcrypt = require("bcrypt");
const mongoose = require("../utilities").mongooseUtility;
const Schema = mongoose.Schema;

const schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role_id: {
        type: Schema.Types.ObjectId, 
        ref: 'roles',
        auto: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    birthday: {
        type: Date
    },
    gender: {
        type: String
    },
    about: {
        type: String
    },
    regDate: {
        type: Date,
        default: Date.now()
    }
});

schema.pre('save', function(next) {
    const user = this;

    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err);

        user.password = hash;

        next();
    });
});

schema.methods.checkPass = function(plainPass, cb) {
    bcrypt.compare(plainPass, this.password, (err, res) => {
        if (err) return cb(err);
        cb(null, res);
    });
};

module.exports = mongoose.model("User", schema);