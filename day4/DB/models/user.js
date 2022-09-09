const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Users = new schema({
    firstName: String,
    lastName: String,
    birthDate:Date,
    isMarried:Boolean
});

const User = mongoose.model("user", Users);
module.exports = User
