## Questão 1  
**Crie uma aplicação Express com três rotas diferentes:**

```node
app.get("/", (req, res)=>{
    res.send("Rota Principal")
    const hora = new Date();
    console.log("URL acessada: http://localhost:8080/Raiz as " + hora.getHours() + ":" + hora.getMinutes());
});

app.get("/produtos", (req, res)=>{
    res.send("Arroz, Banana, Manga, Filé de Frango, Macarrão")
    console.log("URL acessada: http://localhost:8080/produtos")

    const produtos = [
    { id: 1, nome: "Camiseta", preco: 50 },
    { id: 2, nome: "Calça", preco: 120 },
    { id: 3, nome: "Tênis", preco: 200 }
  ];

  res.render("produtos", {produtos});
}); 

```

## Questão 2  
**Adicione um middleware que exiba no console a URL acessada e a hora da requisição.**

```node
const logMidleWare = (req, res, next) => {
    const horaAtual = new Date();
    const horaFormatada = horaAtual.getHours() + ":" + horaAtual.getMinutes();
    console.log("Rota acessada: http://localhost:8080" + req.url + " às " + horaFormatada);
    next();
};

app.use(logMidleWare);
```

## Questão 3
**Faça uma rota que retorne dados em JSON, simulando uma API de produtos.**
```node
app.get("/produtos/estoque", (req, res)=>{
    res.json({
        Lista: ["Arroz", "Banana", "Manga", "Filé de Frango", "Macarrão"]
    })
    console.log("Lista de dados");
});
```

## Questão 4
**Crie uma rota que receba um parâmetro na URL e retorne esse valor em maiúsculas.**
```node
app.get("/produtos/estoque/:conteudo", (req, res)=>{
    const valor = req.params.conteudo
    const resultado = valor.toUpperCase();
    res.send(resultado)
});
```

## Questão 5
**Implemente uma rota /aluno/:nome/:idade que receba o nome e idade como parâmetros e retorne uma frase como:**
```node
app.get("/aluno/:nome/:idade", (req, res)=>{
    const param1 = req.params.nome
    const param2 = req.params.idade
    res.send("O aluno " + param1 + " tem " + param2 + " anos.")
});
```

## Questão 6 e 7
**Crie uma rota /busca que use query string (?q=valor) e retorne "Você buscou por: valor"**
**Adicione tratamento de erro para quando o parâmetro ou query não for informado.**
```node
app.get("/busca", (req, res)=>{
    var busca = req.query.q

    // tratamento de erro
    if(!busca){
        console.log("Erro: nenhum parametro de busca informado")
        return res.status(400).send("Erro: nenhum parametro de busca informado")
    } else{
        res.send("Você buscou por: " + busca)
    }

});
```

## Questão 8
**Crie uma rota que receba dois números como parâmetros (/soma/5/3) e retorne o resultado da soma.**
```node
app.get("/soma/:num1/:num2", (req, res)=>{
    var resultado = Number(req.params.num1) + Number(req.params.num2)
    res.send(resultado)
});
```

## Questão 9 e 10
**Configure um controller separado para lidar com rotas de /usuarios.**
**10. No controller, crie duas rotas**
**o /usuarios/ → retorna lista de usuários** 
**o /usuarios/:id → retorna detalhes de um usuário específico.**
```node
const express = require("express");
const router = express.Router();

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
```

## Questão 11 e 12
**Crie um template EJS que receba uma lista de produtos (array de objetos) e exiba como uma tabela HTML.**
**Adicione CSS básico ao template para melhorar a apresentação.** 
```node
/views/produtos.ejs
```

## Questão 13
**Modifique o template pagina.ejs para receber dois parâmetros: titulo e mensagem.**
```node
/views/pagina.ejs
```
