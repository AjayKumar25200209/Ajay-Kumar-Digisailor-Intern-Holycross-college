const express = require('express')
var router= express.Router();
const app = express()
const port = 3000

router.get('/', (req, res) => {
  res.send('<h1>Things</h1>')
})

router.get('/Home', (req, res) => {
    res.send('<center><h1>Home Page</h1></center>')
  })

router.get('*', (req, res) => {
    res.send('<center><h1>404 Error the Link Not Valid</h1></center>')
  })

module.exports = router;




