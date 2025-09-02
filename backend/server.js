// Importando os módulos das dependências
const express = require("express");
const cors = require("cors");

// Criando a instância da aplicação express
const app = express();

// Definindo a porta da aplicação
const port = 5001;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
