const express = require("express");

const router = express.Router();

// ─── Tarefa A — Acervo (Livros) ───────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
const livros = [];
let proximoId = 1;

// GET /livros — lista todos os livros do acervo.
router.get("/", (req, res) => {
  // TODO (Tarefa A): responda com status 200 e o array `livros`.
  res.status(501).json({ erro: "não implementado" });
});

// POST /livros — cadastra um livro { titulo, autor } (ambos TEXTO/string).
router.post("/", (req, res) => {
  // TODO (Tarefa A):
  //  1. Leia titulo (texto) e autor (texto) de req.body.
  //  2. Se faltar titulo OU autor, responda 400.
  //  3. Crie { id: proximoId++, titulo, autor }, adicione em `livros`
  //     e responda 201 com o livro criado.
  res.status(501).json({ erro: "não implementado" });
});

// GET /livros/:id — retorna UM livro pelo id (404 se não existir).
router.get("/:id", (req, res) => {
  // TODO (Tarefa A):
  //  1. Converta req.params.id para número.
  //  2. Encontre o livro com esse id. Se não existir, responda 404.
  //  3. Caso exista, responda 200 com o livro.
  res.status(501).json({ erro: "não implementado" });
});

module.exports = router;
