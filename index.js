const express = require("express");
const app = express();

// Endpoint / -> Hello World
app.get("/", function (req, res) {
  res.send("Hello World");
});

// Endpoint /oi -> Olá, mundo!
app.get("/oi", function (req, res) {
  res.send("Olá, mundo!");
});

// Lista de informações
const itens = ["Rick Sanchez", "Morty Smith", "Summer Smith"];
//              0               1              2

// CRUD -> Lista de informações

// Endpoint Read All -> [GET] /item
app.get("/item", function (req, res) {
  res.send(itens);
});

// Endpoint Read Single by ID -> [GET] /item/:id
app.get("/item/:id", function (req, res) {
  res.send("Read by ID");
});

app.listen(3000);
