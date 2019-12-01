const PORT = process.env.PORT || 8080
const MONGO_ARTICLE_URL = `mongodb+srv://nova:st18chenh@cluster0-ztrfz.azure.mongodb.net/uwam_articles?retryWrites=true&w=majority
Copy`
const MONGO_IMG_URL = `mongodb+srv://nova:st18chenh@cluster0-ztrfz.azure.mongodb.net/uwam_files?retryWrites=true&w=majority
Copy`

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv').config()
const cors = require('cors')

const API_Router = require('./routes/route_api')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

if(process.env.NODE_ENV=='development'){
    console.log('in dev mode')
    app.use(cors())
}

app.use('/api', API_Router)

app.get('/', (req,res) => res.json({message:'hello world'}))

app.listen(PORT, () => console.log(`New User Connected @ PORT:${PORT}`))