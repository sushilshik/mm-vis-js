const express = require('express');

const app = express();

var path = require('path');

app.use(express.static("/home/node/public"));
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "home/node/public", "index.html"));
});

const server = app.listen(3000, () => {
  const { port } = server.address();
  console.log(`Example app listening on port ${port}`);
});
