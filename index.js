#! /usr/bin/env node
const express = require('express')
const path = require('path')
const comments = require('./comments')
const pictures = require('./pictures')
const app = express()

app.set('view engine','hbs')
app.use(express.static(path.join(__dirname, 'public')))

app.listen(4000, () => {
})

app.get("/", (req,res) => {
    res.render(path.join(__dirname, "/views/index"))
})

app.get("/pictures", (req,res) => {
    const pictureIndex = Math.floor(Math.random() * pictures.length)
    const commentIndex = Math.floor(Math.random() * comments.length)
    res.render(path.join(__dirname,'views/pictures'), {pictureFile: pictures[pictureIndex], comment: comments[commentIndex]})
})

app.get("/public/style.css", (req,res) => {
    res.send("hello world!")
})