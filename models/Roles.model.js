const mongoose = require("../utilities").mongooseUtility;
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        require: true,
        unique: true
    }
});

module.exports = mongoose.model("Role", schema);