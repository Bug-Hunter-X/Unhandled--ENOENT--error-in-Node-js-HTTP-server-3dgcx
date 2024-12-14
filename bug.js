const http = require('http');

const server = http.createServer((req, res) => {
  // The problem is here, I don't handle the error properly
  fs.readFile('./bigfile.txt', (err, data) => {
    if (err) {
      console.error('Failed to read file:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});