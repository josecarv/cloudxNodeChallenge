const {ArticleController} = require('../../controllers');

module.exports = router => {
    router.get('/', ArticleController.fetch);
    router.post('/', ArticleController.create);
    router.get('/:id', ArticleController.find);
    router.put('/:_id', ArticleController.update);
    router.delete('/:id', ArticleController.remove);

    return router;
};
