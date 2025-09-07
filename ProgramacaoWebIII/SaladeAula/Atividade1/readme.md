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