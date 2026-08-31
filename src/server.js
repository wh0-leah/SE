const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// GET /health — já implementada. Use para conferir que o servidor sobe.
// Os testes de correção esperam que GET /health responda com status 200.
app.get("/health", (req, res) => {
  res.json({ status: "ok", projeto: "Biblioteca do Campus (dupla)" });
});

// Dois módulos independentes — um por integrante da dupla.
// O roteamento já está pronto; cada pessoa implementa o SEU arquivo em src/rotas/.
app.use("/livros", require("./rotas/livros"));           // Tarefa A
app.use("/emprestimos", require("./rotas/emprestimos")); // Tarefa B

app.listen(PORT, () => {
  console.log(`Biblioteca do Campus (dupla) rodando em http://localhost:${PORT}`);
});

module.exports = app;
