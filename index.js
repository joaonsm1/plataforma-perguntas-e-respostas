const express = require("express");
const app = express();

//dizendo ao express para usa o ejs como View engine
app.set('view engine', 'ejs');

app.get("/:nome/:lang",(req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        {nome: "Doritos", preco:3.14},
        {nome: "Coca-cola",preco:5.05},
        {nome: "Leite",preco:1.45},
        {nome: "Carne",preco:15.02},
        {nome: "RedBull",preco:6.08},
        {nome: "Nescau",preco:2.80}
    ]
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Tonypack",
        msg: exibirMsg,
        inscritos: 8000,
        produtos: produtos
        
    });
});

app.listen(8080,() => {
    console.log("App rodando!");
});