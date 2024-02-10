const express = require('express')
var router= express.Router();
const app = express()
const port = 3000

router.get('/', (req, res) => {
  res.send("it's Working")
})

router.get('/home', (req, res) => {
    jdata={
      'userid':1,
      'name':'Hello World!',
      'message':'Data From Express server'
    }
    res.json(jdata)
  })


  router.get('/data', (req, res) => {
    
const data = [
  {
    name: '2015',
    
    "ODI Runs": 623,
    amt: 2400,
  },
  {
    name: '2016',
    
    "ODI Runs": 739,
    amt: 2210,
  },
  {
    name: '2017',
    
    "ODI Runs": 1460,
    amt: 2290,
  },
  {
    name: '2018',
    
    "ODI Runs": 1202,
    amt: 2000,
  },
  {
    name: '2019',
   
   "ODI Runs": 1377,
    amt: 2181,
  },
  {
    name: '2020',
   
    "ODI Runs": 431,
    amt: 2500,
  },
  {
    name: '2021',
    
    "ODI Runs": 129,
    amt: 2000,
  },
  {
    name: '2022',
   
   "ODI Runs": 	302,
    amt: 2181,
  },
  {
    name: '2023',
   
    "ODI Runs": 1377,
    amt: 2500,
  },
];

    res.json({"data":data , "data1":data1,})
  })

router.get('*', (req, res) => {
    res.send('<center><h1>404 Error the Link Not Valid</h1></center>')
  })

module.exports = router;




