const path = require('path')
const express = require('express')

const app = express()
const pubPath = path.join(__dirname, '../public')

app.use(express.static(pubPath))

app.get('/about', (req, res) => {
  res.send("About Page")
})

app.get('/contact', (req, res) => {
  res.send("Contact Page")
})

app.get('/parts', (req, res) => {
  res.send("Parts Page")
})

app.get('/projects', (req, res) => {
  res.send("Projects Page")
})

app.listen(3000, () => {
  console.log("Server running")
})
