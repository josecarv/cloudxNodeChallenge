const {CommentController} = require('../../controllers');

module.exports = router => {
    router.get('/', CommentController.fetch);
    router.post('/', CommentController.create);
    router.get('/#article=:articleId', CommentController.find);
    router.put('/:_id', CommentController.update);
    router.delete('/:id', CommentController.remove);

    return router;
};
