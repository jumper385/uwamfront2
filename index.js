const PORT = process.env.PORT || 8080

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()

const app = express()

app.get('/', (req,res) => res.json({message:'hello world'}))

app.listen(PORT)