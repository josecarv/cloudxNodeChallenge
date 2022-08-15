const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./models');

const Routes = require('./routes');

const PORT = process.env.PORT || 3000;
const app = express();



app.use(logger('dev'));
app.use(bodyParser.json());

app.use((err,req,res,next) => {
    console.log(err);
   if(err instanceof mongoose.Error.ValidationError){
        res.status(400).send(err.message);
        return
   }
});
Routes.configure(app);

const start = async () => {
    if(process.env.ENV === 'Test'){
        console.log('This is a test');
        await mongoose.connect('mongodb://localhost/articleCRUDTest');
     }else{
        await mongoose.connect('mongodb://localhost/articleCRUD');

     }    

    app.server = app.listen(PORT, () => {
        console.log(`Express server listening on port ${PORT}`);
    });
};
module.exports = app;
start();
