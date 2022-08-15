const should = require('should');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index.js');

const Article = mongoose.model('Article');
const agent = request.agent(app);

process.env.ENV= 'Test';
describe('Article Crud Test', ()=>{
    
    it('should allow an article to be posted', (done) =>{
        const articlePost= 
        {
            article: {
                title : 'My title', 
                author: 'Jose', 
                body: 'some body'
            }
           
        };
        agent.post('/api/articles')
            .send(articlePost)
            .expect(200)
            .end((err,results) =>{
                //console.log(results);
                results.body.should.have.property('_id');
                done();
            });
    });
    

    afterEach((done) => {
        Article.deleteMany({}).exec();
        done();
    });

    after((done) =>{
        mongoose.connection.close();
        app.server.close(done());
    });

});