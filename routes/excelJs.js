const ExcelJS = require('exceljs');
var connection = require('./config.js'); // Import your database connection

  const query = 'SELECT * FROM students'; // Replace with your table name
  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching data');
    } else {
        const query = 'SELECT * FROM students'; // Replace with your table name
        connection.query(query, (err, results) => {
          if (err) {
            console.error(err);
            res.status(500).send('Error fetching data');
          } else {
            res.json(results);
          }
        });
    }
  });


app.get('/generate-excel', (req, res) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet 1');

  // Add data to the worksheet
//   worksheet.addRow(['Name', 'Age', 'Location']);
//   worksheet.addRow(['John Doe', 30, 'New York']);
//   worksheet.addRow(['Jane Smith', 25, 'Los Angeles']);

  // Set headers for the response
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename=example.xlsx');

  // Write the workbook to the response
  workbook.xlsx.write(res)
    .then(() => {
      res.end();
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error generating Excel file');
    });
});
