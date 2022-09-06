const express = require('express') 
const app = express()
const port = process.env.PORT || 3005
var path = require('path');
var serveStatic = require('serve-static');
app.use(serveStatic(__dirname + "/dist"));





app.listen(port, () => {
    console.log("app listening on port ", port)
})