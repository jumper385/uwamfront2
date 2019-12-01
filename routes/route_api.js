const express = require('express')
const router = express.Router()

const Article_Route = require('./route_articles')
const Image_Route = require('./route_images')

router.use('/articles', Article_Route)
router.use('/images', Image_Route)

router.get('/', (req,res) => res.json({message: 'entering the /api route...'}))

module.exports = router