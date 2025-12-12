const mongoose = require("mongoose");
require("dotenv").config();
function connectToDb() {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log(`data connect to successfully`);
        })
        .catch(() => {
            console.log(`data not connect to successfully! plz try`);
        })
}
module.exports = connectToDb