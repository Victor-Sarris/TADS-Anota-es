const express = require("express");
const router = express.Router();


// 10. No controller, crie duas rotas: 
// o /usuarios/ → retorna lista de usuários 
// o /usuarios/:id → retorna detalhes de um usuário específico.


const usuarios = [
    { id: 1, nome: "Alice", email: "alice@email.com" },
    { id: 2, nome: "Bruno", email: "bruno@email.com" },
    { id: 3, nome: "Carla", email: "carla@email.com" }
];

router.get("/usuarios", (req, res)=>{
    res.json(usuarios)
})

router.get("/usuarios/:id", (req, res)=>{
    var id = Number(req.params.id);
    var usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).send("Usuário não encontrado");
    }

    res.json(usuario);
})

// Rota /produtos
router.get("/produtos", (req, res) => {
  const produtos = [
    { id: 1, nome: "Camiseta", preco: 50 },
    { id: 2, nome: "Calça", preco: 120 },
    { id: 3, nome: "Tênis", preco: 200 }
  ];
  res.render("produtos", { produtos });
});

// Rota /pagina
router.get("/pagina", (req, res) => {
  res.render("pagina", { titulo: "Bem-vindo", mensagem: "Página dinâmica com EJS" });
});

module.exports = router;