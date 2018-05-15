const http = require('http');
const fs = require('fs');
const mtg = require('mtgsdk');
const port = 3000;

const server = http.createServer(function (req, resp) {
    //3.
    fs.readFile("index.html", function (error, pgResp) {
        if (error) {
            resp.writeHead(404);
            resp.write('Contents you are looking are Not Found');
        } else {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(pgResp);
        }
        resp.end();
    });
});

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});

mtg.card.where({ supertypes: 'legendary', types:'creature'})
.then(cards => {
    console.log(cards[Math.floor(Math.random() * cards.length)].name);
});