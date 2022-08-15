const {Comment} = require('../models');

class CommentService {
    
    fetch() {
        return Comment.find({}).lean().exec();
    }
    async find(id) {
        const comment = await Comment.findById(id).populate('article').lean().exec();
        
        return comment;
    }
    create(comment) {
        return Comment.create(comment);
    }
    update(_id, comment) {
        return Comment.findByIdAndUpdate(_id, comment).lean().exec();
    }    
    remove(id) {
        return Comment.findByIdAndRemove(id).lean().exec();
    }
}

module.exports = CommentService;
