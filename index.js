const express = require('express')
const comments = require('./comments')
const pictures = require('./pictures')
const app = express()

app.set('view engine','hbs')
app.use(express.static('public'))

app.listen(4000, () => {
})

app.get("/", (req,res) => {
    res.render("index")
})

app.get("/pictures", (req,res) => {
    const pictureIndex = Math.floor(Math.random() * pictures.length)
    const commentIndex = Math.floor(Math.random() * comments.length)
    console.log(commentIndex)
    res.render("pictures", {pictureFile: pictures[pictureIndex], comment: comments[commentIndex]})
})