const app = require('./app');
const connectDatabase = require('./config/database')

const dotenv = require('dotenv');


// Handling Uncaught exception  

process.on("uncaughtException", (err) => {
    process.exit(i);
})

// Config

dotenv.config({path:"backend/config/config.env"});

const dbURI = process.env.DATABASE;

// Connecting to database

connectDatabase(dbURI);

const server = app.listen(process.env.PORT, () => {
    console.log('server Working');
})


// Unhandled promise Rejections 

process.on("unhandledRejection", err => {

    server.close(() => {
        process.exit(i);
    })

})