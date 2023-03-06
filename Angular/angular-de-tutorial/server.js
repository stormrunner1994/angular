const express = require('express');
const path = require('path');
const app = express();
console.log(__dirname + '\\angular-de-tutorial');
app.use(express.static(__dirname + '\\angular-de-tutorial'));
app.get('/*', function(req,res) {res.sendFile(path.join(__dirname+'\\src\\index.html'));});
console.log(__dirname+'\\src\\index.html');
app.listen(process.env.PORT || 8080);