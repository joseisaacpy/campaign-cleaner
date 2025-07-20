// Imports
import express from "express";
import multer from "multer";
import limparController from "../Controllers/limpar.controller.js"; // Controlador

// Constantes
const router = express.Router();
const upload = multer();

// Rotas
router.post(
  "/",
  upload.fields([
    // name: nome do input
    // maxCount: número máximo de arquivos
    { name: "campanha", maxCount: 1 },
    { name: "bilhete", maxCount: 1 },
  ]),
  limparController
); // Quando acessar a rota, vai chamar o controlador

// Exportação
export default router;
