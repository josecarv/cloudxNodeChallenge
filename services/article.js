const {Article} = require('../models');

class ArticleService {
    fetch() {
        return Article.find({}).lean().exec();
    }

    find(id) {
        return Article.findById(id).lean().exec();
    }

    create(article) {
        return Article.create(article);
    }

    update(_id, article) {
        return Article.findByIdAndUpdate(_id, article).lean().exec();
    }

    remove(id) {
        return Article.findByIdAndRemove(id).lean().exec();
    }
}

module.exports = ArticleService;
