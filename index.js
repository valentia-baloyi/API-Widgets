import express from 'express';

import longestWord from './bootcamp/LongestWord.js';
import shortestWord from './bootcamp/ShortestWord.js';
import wordLengths from './bootcamp/WordLengths.js';
import phoneBill from './bootcamp/totalphoneBill.js';
import enoughAirtime from './bootcamp/enoughAirtime.js'


const app = express();
app.use(express.static('public'));

app.use(express.json());

app.get('/api/word_game', function (req, res) {
    const sentence = req.query.sentence;
    if (!sentence) {
        res.json({
            error: 'sentence not found'
        })
    }
        res.json({
        
            "longestWord" : longestWord(sentence),
            "shortestWord": shortestWord(sentence),
            "sum" : wordLengths(sentence)
           
    });
  });

  app.get('/api/phonebill/prices',function (req,res){
    const bill=req.query.bill;
    res.json({
        "bill": phoneBill(bill)
    })
  })
  
  app.post('/api/phonebill/total',function(req,res){
    const bill=req.body.bill;
    res.json({
        "status":'success',
        "total":phoneBill(bill)
    })
  })
  
  app.post('/api/phonebill/prices',function (req,res){
    const type=req.body.type;
    const price=req.body.price;
    res.json({
        "status":"success",
        "message":`${type} was set to ${price}`
    })
  })
  
  app.get('/api/enoughAirtime', (req, res) => {
    const usage = req.query.usage;
    const available = req.query.available;
  
    if(!usage || !available){
      res.json({
        error: 'Please enter usage and available airtime.'
      });
    };
    res.json({
      'total': enoughAirtime(usage,available)
    });
  });
  
  app.post('/api/enoughAirtime', (req, res) => {
    const usage = req.body.usage;
    const available = req.body.available;
    res.json({
      message : 'success',
      result : enoughAirtime(usage,available)
    });
  });
  
  
  
  let PORT = process.env.PORT || 3011;
  
  app.listen(PORT, function () {
      console.log('App starting on port', PORT);
  });
  