var express = require('express');
var app = express();
var bodyParser=require('body-parser');
app.use(bodyParser());

app.get('/', function (req, res) {
  var sum = "";
var obj = {prop1: 5, prop2: 13, prop3: 8};
var item;
for(item in obj) {
  sum += obj[item]+"  ";
}

console.log(sum);

   res.send(sum);
})
app.get('/inloop', function (req, res) {
  var txt = "";
var person = [1,2,3];
//var x;
for(var x in person) {
    txt += person[x] + " ";
}

   res.send(txt);
})

app.get('/eachloop', function (req, res) {
  var arr = "";
  var txt;
var person = [1,2,3];
//var x;
person.forEach(function(txt)
{
  arr += txt+ " ";
  console.log(txt)
})

   res.send(arr);
})

app.get('/ofloop', function (req, res) {
  var txt = "";
var person = [1,2,3];
//of---value
//in --index
for(var x in person) {
    txt += x+ " ";
    
}

   res.send(txt);
})
/////////////////////////////////////////
//2darary
app.get('/tarray', function (req, res) {
var txt=" "
var temp;
var obj={item1:{
  i1:"kashish",
  i2:"manik"
},
item2:{
  i1:"kkk",
  i2:"bbb"
}
}
for(var x in obj)
{
  temp=obj[x]
  for(var y in temp)
  {
     txt +=temp[y]+ " ";
     console.log(txt);
  }
  
}
   res.send(txt);
})

app.post('/post', function (req, res) {
  console.log(req.body);
res.send(req.body);
})

//////////////
////access 2d obj
app.get('/tobj', function (req, res) {
var txt=" "
var arr=[[1,2][3,4]];
for(var x in arr)
{
  for(var y in arr)
  {
     txt +=arr[x][y]+ " ";
     console.log(txt);
  }
}
   res.send(txt);
})

app.post('/post', function (req, res) {
  console.log(req.body);
res.send(req.body)


   
})


var server = app.listen(8082, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
