const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('', (req, res) => {
  res.render('index', {})
})

app.listen(port, () => console.log(`http://localhost:${port}`))