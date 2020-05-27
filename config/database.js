const mongoose = require('mongoose')
const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(process.env.DATABASE_URL, 
    {
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true
    }
);

mongoose.connection.on('connected', () => {
    console.log('Connected to ${process.env.DATABASE_URL}')
})

module.exports = mongoose
