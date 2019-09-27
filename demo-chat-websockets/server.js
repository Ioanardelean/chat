const app = require("express")(),
  server = require("http").createServer(app),
  io = require("socket.io").listen(server);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})


server.listen(8080);
