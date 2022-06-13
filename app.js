const fs = require('fs');
const express = require('express');

const app = express();

const files = {
  '/': fs.readFileSync('./index.html'),
  '/about.html': fs.readFileSync('./about.html'),
  '/contact-me.html': fs.readFileSync('./contact-me.html'),
  'error': fs.readFileSync('./404.html')
}

app.use((req, res) => {
  const path = req.url.toLowerCase();
  if(!files[path]) {
    res.status(404).write(files.error);
    res.end();
    return;
  }

  res.write(files[path]);
  res.end();
});

app.listen(3000);