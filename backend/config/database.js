const mongoose = require("mongoose");

const connectDatabase = (dbURI) => {
    mongoose
        .connect(dbURI)
        .then((result) => {
            console.log("connected to db and listening at port 5000");
        });
}

module.exports = connectDatabase;

