const express = require("express");

const router = express.Router();

const livros = [];
let proximoId = 1;

router.get("/", (req, res) => {
  res.status(200).json(livros);
});

router.post("/", (req, res) => {
  const { titulo, autor } = req.body;

  if (!titulo || !autor) {
    return res.status(400).json({
      erro: "titulo e autor são obrigatórios"
    });
  }

  const livro = {
    id: proximoId++,
    titulo,
    autor
  };

  livros.push(livro);

  res.status(201).json(livro);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const livro = livros.find((livro) => livro.id === id);

  if (!livro) {
    return res.status(404).json({
      erro: "Livro não encontrado"
    });
  }

  res.status(200).json(livro);
});

module.exports = router;
