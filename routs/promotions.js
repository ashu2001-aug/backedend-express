const express = require('express');
const bodyParser = require('body-parser');


const promosRouter = express.Router();


promosRouter.use(bodyParser.json());

promosRouter.route('/')


.all((req,res,next) =>{
    res.statusCode =200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  
  .get((req,res,next)=>{
    res.end('Will send all promos to you !');
  })
  
  
  .post( (req,res,next) =>{
    res.end('Will add the promos: '+req.body.name + ' with details' + req.body.description);
  })
  
  .put( (req,res,next) =>{
    res.statusCode =403;
    res.end('Put operation not supported on /promos');
  })
  
  .delete( (req,res,next) =>{
    res.end('Delete all the promos !');
  });

  promosRouter.route("/:promoId")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res, next) => {
    res.end("Will send details of the promotion: " + req.params.promoId + " to you!");
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /promotions/" + req.params.promoId);
})
.put((req, res, next) => {
    res.write("Updating the promotion: " + req.params.promoId + "\n");
    res.end("Will update the promotion: " + req.body.name + " with details: " + req.body.description);
})
.delete((req, res, next) => {
    res.end("Deleting the promotion: " + req.params.promoId);
});

  
  


  module.exports = promosRouter;