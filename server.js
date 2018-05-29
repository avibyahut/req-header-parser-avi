var express=require("express");
var bodyparser = require("body-parser");
var useragent = require("express-useragent");

var app=express();
app.use(useragent.express())
app.get('/api/whoami',function(req,res){
var ipad =req.headers['x-forwarded-for'].split(',')[0];
var lang = req.acceptsLanguages();
var software="OS : "+req.useragent.os+", browser : "+req.useragent.browser;
  res.json({'ip-address':ipad,'Language':lang[0],'Software':software});
})
app.get('/',function(req,res){
res.sendFile(__dirname+'/views/index.html');
})
app.listen(process.env.PORT);