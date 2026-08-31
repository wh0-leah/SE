# API da Biblioteca do Campus — Sprint em dupla (1 hora)

Uma API REST enxuta para a **biblioteca do campus**, pensada para caber numa **aula de 1 hora**
feita por uma **dupla**. O objetivo é praticar **divisão de trabalho paralela**: a API tem
**dois módulos independentes**, um por integrante, cada um em **seu próprio arquivo** — ninguém
edita o arquivo do outro, então **não há conflito de merge** e os dois trabalham ao mesmo tempo.

O template já vem pronto com o servidor Express, o roteamento dos dois módulos, a rota
`GET /health` e um armazenamento **em memória** (sem banco de dados). Cada integrante implementa
o seu arquivo em `src/rotas/` — um recurso REST **completo**, ponta a ponta.

## As duas tarefas paralelas (uma por pessoa)

### Tarefa A — Acervo (Livros) · `src/rotas/livros.js`
- `GET /livros` — lista todos os livros (array).
- `POST /livros` — corpo `{ titulo, autor }` (ambos **texto**) → **201** com `{ id, titulo, autor }`;
  **400** se faltar `titulo` ou `autor`.
- `GET /livros/:id` — retorna **um** livro pelo id → **200** com o livro; **404** se não existir.

### Tarefa B — Empréstimos · `src/rotas/emprestimos.js`
- `GET /emprestimos` — lista todos os empréstimos (array).
- `POST /emprestimos` — corpo `{ livro, leitor }` (ambos **texto**) → **201** com
  `{ id, livro, leitor, devolvido: false }`; **400** se faltar `livro` ou `leitor`.
- `POST /emprestimos/devolucao` — corpo `{ id }` → **200** marcando `devolvido: true`;
  **400** se o `id` não existir.

## Como rodar
```bash
npm install
npm start        # sobe em http://localhost:3000
```
Confira que `GET /health` responde **200** com `{ "status": "ok" }`.

> Combinem quem faz A e B. Como cada módulo é um arquivo separado, os dois commitam em
> paralelo sem conflito. A dupla submete **um único repositório**.
