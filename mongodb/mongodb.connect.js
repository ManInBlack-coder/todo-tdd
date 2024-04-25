const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

async function connect() {
    try {
        await mongoose.connect(
            process.env.MONGO_URI,
            { useNewUrlParser: true }
        )
        } catch (err) {
            console.log('error connecting to mongodb');
            console.log(err)
        }
    }


module.exports = { connect };