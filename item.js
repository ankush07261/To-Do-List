const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: [true,"task not entered"]
    }
})

module.exports= mongoose.model('Item',itemSchema)