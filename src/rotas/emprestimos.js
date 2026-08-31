const express = require("express");

const router = express.Router();

// ─── Tarefa B — Empréstimos ───────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
const emprestimos = [];
let proximoId = 1;

// GET /emprestimos — lista todos os empréstimos.
router.get("/", (req, res) => {
  // TODO (Tarefa B): responda com status 200 e o array `emprestimos`.
  res.status(501).json({ erro: "não implementado" });
});

// POST /emprestimos — registra um empréstimo { livro, leitor } (ambos TEXTO).
router.post("/", (req, res) => {
  // TODO (Tarefa B):
  //  1. Leia livro (texto) e leitor (texto) de req.body.
  //  2. Se faltar livro OU leitor, responda 400.
  //  3. Crie { id: proximoId++, livro, leitor, devolvido: false }, adicione
  //     em `emprestimos` e responda 201 com o empréstimo criado.
  res.status(501).json({ erro: "não implementado" });
});

// POST /emprestimos/devolucao — dá baixa na devolução do empréstimo { id }.
router.post("/devolucao", (req, res) => {
  // TODO (Tarefa B):
  //  1. Leia id de req.body.
  //  2. Encontre o empréstimo com esse id. Se não existir, responda 400.
  //  3. Marque devolvido = true e responda 200 com o empréstimo atualizado.
  res.status(501).json({ erro: "não implementado" });
});

module.exports = router;
