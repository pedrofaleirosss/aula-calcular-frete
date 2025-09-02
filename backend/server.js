// Importando os módulos das dependências
const express = require("express");
const cors = require("cors");

// Criando a instância da aplicação express
const app = express();

// Definindo a porta da aplicação
const port = 5001;

// Configurar o express para requisições em JSON
app.use(express.json());

// Habilita o CORS para aceitar as requisições da aplicação
app.use(cors());

// Tabela de preços
const precos = {
  bicicleta: 0.8,
  carro: 0.95,
  drone: 1.2,
};

// Criando a rota da aplicação
app.post("/calcularfrete", (req, res) => {
  // Desestruturação para extrair as variáveis da aplicação
  const { distancia, tipoTransporte } = req.body;

  if (distancia === undefined || tipoTransporte === undefined) {
    return res.status(400).json({
      error: "Distância e transporte obrigatórios.",
    });
  }

  const precoPorKm = precos[tipoTransporte.toLowerCase()];

  if (precoPorKm === undefined) {
    return res.status(400).json({
      error: "Tipo de transporte inválido.",
    });
  }

  // Calcular o valor total do frete
  const valorTotal = distancia * precoPorKm;

  res.json({ valorTotal: valorTotal.toFixed(2) }); // Arredonda para 2 casas decimais
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
