const fs = require('fs');
const http = require('http');

const files = {
  '/': fs.readFileSync('./index.html'),
  '/about.html': fs.readFileSync('./about.html'),
  '/contact-me.html': fs.readFileSync('./contact-me.html'),
  'error': fs.readFileSync('./404.html')
}

const server = http.createServer((req, res) => {
  const path = req.url.toLowerCase();
  if(path in files) {
    res.end(files[path]);
  } else {
    res.end(files.error)
  }
})

const port = 8080;
server.listen(port, () => {
  console.log(`Server started at: http://localhost:${port}`)
})

