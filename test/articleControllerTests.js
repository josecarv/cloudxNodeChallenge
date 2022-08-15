const { doesNotMatch } = require('assert');
const { assert } = require('console');
const should = require('should');
const sinon = require('sinon');
const articleController = require('../controllers/article');
const httpMocks = require('node-mocks-http');
const ArticleService = require('../services/article');

describe('Article Controller Test:', ()=>{
    describe('Create', ()=>{
        it('should not allow empty body on create', ()=>{
           
            
            const req = {
                article: {
                    body: 'some body for testing'
                }
            }               

            const res ={
                status : sinon.spy(),
                send : sinon.spy(),
                json : sinon.spy()
            };

            const controller = articleController;
            controller.create(req, res);

            res.status.calledWith(400).should.equal(true,`Bad status ${res.status.args[0][0]}`);
            res.send.calledWith('Title, Author and Body are required').should.equal(true);


        })
    })

/*
    describe('Get', ()=>{
        const articles  = [{
            title : 'test',
            author: 'tes2',
            body: 'test3'
        }] ;
        it('should retrieve an array of articles', ()=>{
            sinon.stub(ArticleService,fetch).resolves(articles);

            let oldFetch = ArticleService.fetch;
        })
    })
   */ 

    
})
 
