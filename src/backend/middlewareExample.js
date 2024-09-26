const express = require('express');
const app = express();

// Middleware para log de requisições
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Passa o controle para o próximo middleware
};

// Usando o middleware em todas as rotas
app.use(loggerMiddleware);

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Hello, this request was logged!');
});

// Inicializando o servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

