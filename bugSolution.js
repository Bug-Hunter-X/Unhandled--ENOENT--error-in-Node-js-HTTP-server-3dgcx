const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  try {
    const data = fs.readFileSync('./bigfile.txt');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File Not Found');
    } else {
      console.error('Failed to read file:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});