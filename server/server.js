// Imports
import express from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
dotenv.config(); // Configuração do dotenv

// Constantes
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Permitir requisições de qualquer origem
app.use(express.json()); // Aceitar JSON
app.use(multer().any()); // Aceitar arquivos
app.use(express.urlencoded({ extended: true })); // Aceitar dados de forms

// Rotas
app.get("/", (req, res) => {
  res.status(200).send("Bem-vindo ao servidor!");
});

// Inicialização do servidor
app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
