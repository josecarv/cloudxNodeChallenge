const {Router} = require('express');

module.exports = router => {
    router.use(`/articles`, require('./articles')(Router()));
    router.use(`/comments`, require('./comment')(Router()));
    
    return router;
};
