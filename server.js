const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.sendDate("AAA");
  }
});
const port = 3000;
server.listen(port);
