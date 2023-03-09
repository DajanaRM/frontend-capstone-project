const cors = require("cors");
const express = require("express");
const port = process.env.PORT || 3001;
const hostname  = '127.0.0.1';
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()


const corsOptions = {
    optionsSuccessStatus: 200,
     methods: '*'
}

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    
    
    fs.readFile('data.json', function (err, data) {
        res.end(data)
    })
    
   
});          


app.post("/api", jsonParser, (req, res) => {
    fs.readFile('data.json', function (err, data) {
        const json = JSON.parse(data)
        
         const newPost = {
            "date" :req.body.date, 
            "from": req.body.from,
            "to": req.body.to,
            "name": req.body.name,
            "guests": req.body.guests,
            "bookingTime": new Date().toLocaleString('en-GB', { year: "numeric", month: "long", day: "numeric"})
            
         }
         const date = req.body.date
         const Booked =  [req.body.guests, req.body.from, req.body.to] 
        
        json.reservations.push(newPost)
        
        if(!json.booked[date]) json.booked[date] = [Booked]
            else json.booked[date].push(Booked)
            
        fs.writeFile('data.json', JSON.stringify(json, null, 2), (err) => {
          if (err)
            console.log(err);
          else {
             console.log(req.body)
            console.log("File written successfully\n");
          }
        })
    })
    
                
    
})

app.get("/menu", (req, res) => {
    
    
    fs.readFile('menu.json', function (err, data) {
        res.end(data)
    })
    
   
});
app.listen(port, hostname);