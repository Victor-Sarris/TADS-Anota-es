const express = require("express");
const app = express();
const controller = require("./controller")
const path = require("path")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Importa as rotas do controller
const rotas = require("./controller");
app.use(rotas);

// midleware

// Crie uma aplicação Express com três rotas diferentes:
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

// Faça uma rota que retorne dados em JSON, simulando uma API de produtos.
app.get("/produtos/estoque", (req, res)=>{
    res.json({
        Lista: ["Arroz", "Banana", "Manga", "Filé de Frango", "Macarrão"]
    })
    console.log("Lista de dados");
});

//Adicione um middleware que exiba no console a URL acessada e a hora da requisição

app.get("/contato", (req, res)=>{
    res.json({
        Nome: "Victor",
        Email: "devvictorsarris@gmail.com"
    });
    console.log("URL acessada: http://localhost:8080/contato")
});

// Crie uma rota que receba um parâmetro na URL e retorne esse valor em maiúsculas.
app.get("/produtos/estoque/:conteudo", (req, res)=>{
    const valor = req.params.conteudo
    const resultado = valor.toUpperCase();
    res.send(resultado)
});


// Implemente uma rota /aluno/:nome/:idade que receba o nome e idade como parâmetros e retorne uma frase como: 
app.get("/aluno/:nome/:idade", (req, res)=>{
    const param1 = req.params.nome
    const param2 = req.params.idade
    res.send("O aluno " + param1 + " tem " + param2 + " anos.")
});

// Crie uma rota /busca que use query string (?q=valor) e retorne "Você buscou por: valor"
// Adicione tratamento de erro para quando o parâmetro ou query não for informado.
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

// Crie uma rota que receba dois números como parâmetros (/soma/5/3) e retorne o resultado da soma. 
app.get("/soma/:num1/:num2", (req, res)=>{
    var resultado = Number(req.params.num1) + Number(req.params.num2)
    res.send(resultado)
});

app.get("vi/pagina", (req, res) => {
  res.render("pagina", { titulo: "Bem-vindo ao site", mensagem: "Esta é uma mensagem dinâmica que veio do backend." });
});


app.listen(8080, (erro)=>{
    if(erro){
        console.log("Erro ao inicializar servidor", erro)
    } else{
        console.log("Servidor rodando na porta 8080")
        console.log("\nhttp://localhost:8080/")
    }
});