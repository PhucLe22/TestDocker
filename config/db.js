const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    }
    catch (error) {
        console.error('Failed to connect to MongoDB: ', error);
        process.exit(1);
    }
    console.log('Connect successfully');
}

module.exports = { connect };