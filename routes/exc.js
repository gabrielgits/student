const express = require('express');
const app = express();

app.get('/generate-excel', (req, res) => {
  res.send('Excel file generated and sent!');
});

module.exports = app ; 