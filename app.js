const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const server = app.listen(port,()=>{
   console.log("server running on port ",port);
});

const io =  require('socket.io')(server);

io.on('connection',(socket)=>{
    console.log("connected successfully...");
});