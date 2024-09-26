const express = require('express');
const app = express();

// Rota GET
app.get('/', (req, res) => {
  res.send('Hello from the GET route!');
});

// Rota POST
app.post('/submit', (req, res) => {
  res.send('Data submitted via POST');
});

// Rota PUT
app.put('/update', (req, res) => {
  res.send('Data updated via PUT');
});

// Rota DELETE
app.delete('/delete', (req, res) => {
  res.send('Data deleted via DELETE');
});

// Inicializando o servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
