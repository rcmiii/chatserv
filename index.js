var
  http = require('http'),
  httpserve = http.createServer(handle),
  port = 8008,
  host = "127.0.0.1",
  node_static = require('node-static'),
  static_files = new node_static.Server(),
  io = require("socket.io").listen(httpserve)
;
httpserve.listen(port, host);

function handle(req, res) {
  console.log(req.url);
  if(req.url.match(/\.(ico|jpg|png|gif|html|css|js)$/)) {
    req.addListener("end",function(){  
      static_files.serve(req, res); 
    });
    req.resume();
  }
}


