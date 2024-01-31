const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.sendDate("AAA");
  }
});

server.listen(3000);
