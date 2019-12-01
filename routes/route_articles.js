const express = require('express')
const mongoose = require('mongoose')
const shortid = require('shortid')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const router = express.Router()
router.use(morgan('dev'))

const MONGO_ARTICLE_URL = `mongodb+srv://nova:st18chenh@cluster0-ztrfz.azure.mongodb.net/articles?retryWrites=true&w=majority`
mongoose.connect(MONGO_ARTICLE_URL, {useUnifiedTopology:true, useNewUrlParser:true})
const conn = mongoose.connection;
const ArticleSchema = new mongoose.Schema({
    title: String,
    article: String,
    shortid: String,
    category: String,
})
const Article = new mongoose.model('Article', ArticleSchema)
conn.once('open', () => console.log('new mongo article connection'))

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}))

router.route('/')
    .get( async (req,res) => {
        const articles = await Article.find()
        res.json(articles)
    })
    .post( async (req,res) => {
        const { title, article, category } = req.body
        const newArticle = await Article.create({ 
            ...req.body, 
            shortid:shortid.generate()
        })
        res.json(newArticle)
    })

router.route('/:id')
    .get( async (req,res) => {
        const article = await Article.findOne({shortid: req.params.id})
        if (article) {
            res.json(article)
        } else {
            res.json({message:'couldt find this article'})
        }
    } )
    .put( async (req,res) => {
        const article = await Article.findOne({shortid: req.params.id})
        if (article) {
            const updates = await article.set({...req.body})
            res.json({
                message: 'this article was updated',
                updates: updates
            })
        } else {
            res.json({message:'couldn\'t find this article'})
        }
    })
    .delete( async (req,res) => {
        const article = await Article.findOne({shortid: req.params.id})
        if (article) {
            const deleted = await article.remove({...req.body})
            res.json({
                message: 'the article was deleted'
            })
        } else {
            res.json({message:'couldn\'t find this article'})
        }
    })

module.exports = router