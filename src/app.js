const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const pubPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../src/partials')

app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);
app.use(express.static(pubPath))

app.get('', (req, res) => {
  res.render('index', {
    title: "3DeRox | 3D Printed Car Parts",
    test: "Testing Text"
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: "3DeRox | About Us"
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: "3DeRox | Contact Us"
  })
})

app.get('/parts', (req, res) => {
  res.render('parts', {
    title: "3DeRox | Parts"
  })
})

app.get('/projects', (req, res) => {
  res.render('projects', {
    title: "3DeRox | Projects"
  })
})

app.listen(3000, () => {
  console.log("Server running")
})
