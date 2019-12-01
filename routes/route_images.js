const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const shortid = require('shortid')
const multer = require('multer')
const Grid = require('gridfs-stream')
const GridFsStorage = require('multer-gridfs-storage');

const MONGO_IMG_URL = `mongodb+srv://nova:st18chenh@cluster0-ztrfz.azure.mongodb.net/images?retryWrites=true&w=majority`
const conn = mongoose.createConnection(
    MONGO_IMG_URL,
    {useUnifiedTopology:true,useNewUrlParser:true},
    () => console.log('connected to img db')
)
const storage = new GridFsStorage({ 
    url: MONGO_IMG_URL,
    options: {useUnifiedTopology: true},
    file: (req,res) => ({filename:shortid.generate()})
})
let gfs = null
conn.once('open',() => {
    gfs = Grid(conn.db, mongoose.mongo)
})
const upload = multer({storage})

const router = express.Router()

router.route('/')
    .get(async (req,res) => {
        const imgList = await gfs.files.find().toArray( (err,files) => {
            if (err) throw err
            if (files.length > 0){
                res.json(files)
            } else {
                res.json({message: 'no images present'})
            }

        } )
    })
    .post(upload.single('photo'), (req,res,next) => {
        res.json(req.file)
    })
router.route('/:id')
    .get(async (req,res) => {
        const readstream = gfs.createReadStream(req.params.id)
        readstream.on('error', err => {
            res.json(err)
        })
        readstream.pipe(res)
    })
    .delete( async (req,res) => {
        gfs.remove({filename:req.params.id}, (err) => {
            if(err) throw err
            res.json({message: 'deleted image'})
        })
    } )

module.exports = router