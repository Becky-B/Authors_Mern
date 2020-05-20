const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { type: String,
            minlength: [3, "not enough characters in Authors name"],
            required: [true, "Name is required"]
        },
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);