const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyparser=require('body-parser')
const mongoose = require('mongoose');

const app = express();
const port = 5000;


// Enable CORS for all routes
app.use(cors());
app.use(bodyparser.json());


// Your routes and other middleware...
const things = require('./things.js');
const api = require('./api/api.js');

app.use('/things', things);
app.use('/api', api);

mongoose.connect('mongodb://localhost:27017/test')

const barschema = new mongoose.Schema({
  "year": Number,
  "chart": String,
  "Runs": Number,
});

const pieschema = new mongoose.Schema({
  "name": String,
  "value": Number
});

const lineschema = new mongoose.Schema({
  "year": Number,
  "ICC Ranking": Number,
  "Century": Number
});


const radarSchema = new mongoose.Schema({
  "subject": String,
  "mark": Number,
  "fullMark": Number
});

const barmodel = mongoose.model('barchart', barschema);
const linemodel = mongoose.model('linechart', lineschema);
const radarmodel = mongoose.model('radarchart', radarSchema);
const piemodel = mongoose.model('piechart', pieschema);



                // bar chart

                // Read bar chart
app.get("/getbar" , (req,res)=>{
   const data=barmodel.find({}).then((data)=>{
      
      res.status(200).json({"msg":"Success" , "data":data})
   })
})

                // delete data in bar chart
app.post("/deletebar" , (req,res)=>{
  const data=barmodel.deleteOne({
        "year":req.body.year,
  }).then((data)=>{
     console.log(data);
     res.status(200).json({"msg":"Your Data was Deleted" })
  })
})
                  // update data in bar chart
app.post("/updatebar" , (req,res)=>{
  const data=barmodel.updateOne({ "year":req.body.year, }, {"Runs":req.body.runs})
  .then((data)=>{
    
     res.status(200).json({"msg":"Your data was Updated" })
  })
})

                // add data in bar chart
app.post("/addbar" , (req,res)=>{
  const data= new barmodel({
    "year":req.body.year,
    "Runs":req.body.runs,
    "chart":"Bar chart",

  })
  data.save().then((data)=>{
    
     res.status(200).json({"msg":"Your data was Added"})
  })
})



                // line chart

                // Read line chart
app.get("/getline" , (req,res)=>{
   const data=linemodel.find({}).then((data)=>{
      console.log(data);
      res.status(200).json({"msg":"Success" , "data":data})
   })
})

                // delete data in line chart
app.post("/deleteline" , (req,res)=>{
  const data=linemodel.deleteOne({
        "year":req.body.year,
  }).then((data)=>{
     console.log(data);
     res.status(200).json({"msg":"Your Data was Deleted" })
  })
})
                  // update data in line chart
app.post("/updateline" , (req,res)=>{
  const data=linemodel.updateOne({ "year":req.body.year, }, { "ICC Ranking": req.body.rank,
  "Century": req.body.century})
  .then((data)=>{
     console.log(data);
     res.status(200).json({"msg":"Your data was Updated" })
  })
})

                // add data in line chart
app.post("/addline" , (req,res)=>{
  const data= new linemodel({
    "year":req.body.year, 
    "ICC Ranking": req.body.rank,
    "Century": req.body.century,

  })
  data.save().then((data)=>{
     
     res.status(200).json({"msg":"Your data was Added"})
  })
})


                // radar chart

                // Read radar chart
app.get("/getradar" , (req,res)=>{
   const data=radarmodel.find({}).then((data)=>{
      console.log(data);
      res.status(200).json({"msg":"Success" , "data":data})
   })
})

                // delete data in radar chart
app.post("/deleteradar" , (req,res)=>{
  const data=radarmodel.deleteOne({
    "subject": req.body.subject,
  }).then((data)=>{
     console.log(data);
     res.status(200).json({"msg":"Your Data was Deleted" })
  })
})
                  // update data in radar chart
app.post("/updateradar" , (req,res)=>{
  const data=radarmodel.updateOne({ "subject": req.body.subject, }, { "mark": req.body.mark,})
  .then((data)=>{
     console.log(data);
     res.status(200).json({"msg":"Your data was Updated" })
  })
})

                // add data in radar chart
app.post("/addradar" , (req,res)=>{
  const data= new radarmodel({
    "subject": req.body.subject,
    "mark": req.body.mark,
    "fullMark": 100,

  })
  data.save().then((data)=>{
     console.log(data);
     res.status(200).json({"msg":"Your data was Added"})
  })
})


                // Pie chart

                // Read pie chart
app.get("/getpie" , (req,res)=>{
   const data=piemodel.find({}).then((data)=>{
      console.log(data);
      res.status(200).json({"msg":"Success" , "data":data})
   })
})

                // delete data in pie chart
app.post("/deletepie" , (req,res)=>{
  const data=piemodel.deleteOne({
    "name": req.body.name
  }).then((data)=>{
     console.log(data);
     res.status(200).json({"msg":"Your Data was Deleted" })
  })
})
                  // update data in pie chart
app.post("/updatepie" , (req,res)=>{
  const data=piemodel.updateOne({"name": req.body.name, }, { "value": req.body.value,})
  .then((data)=>{
     console.log(data);
     res.status(200).json({"msg":"Your data was Updated" })
  })
})

                // add data in pie chart
app.post("/addpie" , (req,res)=>{
  const data= new piemodel({
    "name": req.body.name,
    "value": req.body.value

  })
  data.save().then(data=>{
     console.log(data);
     res.status(200).json({"msg":"Your data was Added"})
  })
})







// Define your routes
app.get('/', (req, res) => {
  res.send('<center><title>Express.js</title><h1>Hello World!</h1></center>');
});

app.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname  ,   'index.html'))
});

app.get('/htm', (req, res) => {
  res.render("index")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
