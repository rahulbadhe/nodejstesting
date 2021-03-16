var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running`);
});

//app.listen(3000);
