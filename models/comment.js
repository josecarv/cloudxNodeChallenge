const mongoose = require('mongoose');

const Comment = mongoose.model('Comment', new mongoose.Schema({
    author: {type: String, required: true},
    body: {type: String, required: true},
    article: { type: mongoose.Schema.Types.ObjectId, ref:'Article'}
}));

module.exports = Comment;
