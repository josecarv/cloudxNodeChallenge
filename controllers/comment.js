const {CommentService} = require('../services');

const commentService = new CommentService();

class CommentController {
    static async fetch(req, res, next) {
        try {
            res.send(await commentService.fetch());
        } catch (err) {
            next(err);
        }
    }

    static async find(req, res, next) {
        try {
            res.send(await commentService.find(req.params.id));
        } catch (err) {
            next(err);
        }
    }

    static async create(req, res, next) {
        try {
            res.status(201).send(await commentService.create(req.body));
        } catch (err) {
            next(err);
        }
    }

    static async update(req, res) {
        try {
            res.send(await commentService.update(req.params._id, req.body));
        } catch (err) {
            next(err);
        }
    }

    static async remove(req, res, next) {
        try {
            res.status(202).send(await commentService.remove(req.params.id));
        } catch (err) {
            next(err);
        }
    }
}

module.exports = CommentController;
