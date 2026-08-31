const express = require("express");

const router = express.Router();

const emprestimos = [];
let proximoId = 1;

router.get("/", (req, res) => {
  res.status(200).json(emprestimos);
});

router.post("/", (req, res) => {
  const { livro, leitor } = req.body;

  if (!livro || !leitor) {
    return res.status(400).json({
      erro: "livro e leitor são obrigatórios"
    });
  }

  const emprestimo = {
    id: proximoId++,
    livro,
    leitor,
    devolvido: false
  };

  emprestimos.push(emprestimo);

  res.status(201).json(emprestimo);
});

router.post("/devolucao", (req, res) => {
  const { id } = req.body;

  const emprestimo = emprestimos.find(
    (emprestimo) => emprestimo.id === Number(id)
  );

  if (!emprestimo) {
    return res.status(400).json({
      erro: "Empréstimo não encontrado"
    });
  }

  emprestimo.devolvido = true;

  res.status(200).json(emprestimo);
});

module.exports = router;
