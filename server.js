const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes');

app.use(router, (req, res) => res.send('hello world'));

app.listen(port, (err) => {
  if (err) {
    console.log(`Error happened: ${ErrorEvent}`);
  } else {
    console.log(`Server is launching on port ${port}`);
  }
});
