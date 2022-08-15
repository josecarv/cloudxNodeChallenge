const {ArticleService} = require('../services');
const articleService = new ArticleService();

class ArticleController {   
    
    static async fetch(req, res, next) {
        try {
            const response = await articleService.fetch();
            res.send(response);
        } catch (err) {
            next(err);
        }
    }

    static async find(req, res, next) {
        try {
            res.send(await articleService.find(req.params.id));
        } catch (err) {
            next(err);
        }
    }

    static async create(req, res, next) {
        try {
            
            if(!req.body){                
                res.status(400);
                return res.send('Title, Author and Body are required');
            }

            res.status(201).send(await articleService.create(req.body.article));
        } catch (err) {
            next(err);
        }
    }

    static async update(req, res) {
        try {
            res.send(await articleService.update(req.params._id, req.body.article));
        } catch (err) {
            next(err);
        }
    }

    static async remove(req, res, next) {
        try {
            res.send(await articleService.remove(req.params.id));
        } catch (err) {
            next(err);
        }
    }
}

module.exports = ArticleController;
