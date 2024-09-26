Relatório: Express - Conceitos e Aplicação

1. O que é o Express e suas principais funcionalidades
   O Express é um framework para Node.js, projetado para simplificar a criação de aplicativos web e APIs. Ele fornece uma camada abstrata sobre as funcionalidades do Node.js, tornando mais fácil gerenciar rotas, middlewares, requisições HTTP e respostas. Com sua simplicidade e modularidade, o Express é amplamente usado para construir servidores back-end e APIs RESTful.

Principais funcionalidades:

Gerenciamento de rotas: Criação de rotas para manipular diferentes caminhos e métodos HTTP, como GET, POST, PUT e DELETE.
Middlewares: Capacidade de interceptar, modificar e encaminhar requisições antes de serem processadas pelas rotas.
Gerenciamento de erros: Tratamento eficiente de erros através de middlewares dedicados.
Suporte a diferentes engines de templates: Para gerar HTML dinâmico, como Pug, EJS, etc.
Integração com bancos de dados: Possui compatibilidade com bibliotecas para conexão com diversos bancos de dados (MongoDB, MySQL, PostgreSQL).
Escalabilidade: Fácil de usar com microservices, facilitando o escalonamento de aplicativos.

2. Diferença entre Node.js puro e o uso de Express
   Embora seja possível criar servidores HTTP com Node.js puro, o Express simplifica o processo. No Node.js puro, o desenvolvedor precisa configurar manualmente o servidor, manipular requisições e criar lógica para gerenciar rotas, o que pode tornar o código complexo à medida que o projeto cresce.

3. Como criar rotas básicas com Express
   Rotas no Express definem como as requisições feitas a URLs específicas devem ser tratadas. As rotas podem ser definidas para vários métodos HTTP, como GET, POST, PUT, DELETE.

4. Conceitos de middlewares no Express
   Middlewares são funções que têm acesso ao objeto de requisição (req), ao objeto de resposta (res) e à função next. Eles podem realizar tarefas como autenticação, processamento de dados ou manipulação de respostas, e são executados entre a requisição e a resposta final.

Tipos de middlewares no Express:

Aplicação: Aplicados a todo o aplicativo.
Rota específica: Aplicados a uma rota específica.
Middlewares embutidos: Como express.json() para lidar com JSON.
Middlewares de terceiros: Como body-parser para processar formulários.
