const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// Configurando o proxy
app.use('/api', createProxyMiddleware({
  target: 'https://jsonplaceholder.typicode.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove o '/api' da URL
  },
}));

// Inicializando o servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});

