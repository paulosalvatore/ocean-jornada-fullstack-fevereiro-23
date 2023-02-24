const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

// localhost ou 127.0.0.1
// const DB_URL = "mongodb://127.0.0.1:27017";
const DB_URL =
  "mongodb+srv://admin:fsdLuHLFo4KwOZ7N@cluster0.bndngam.mongodb.net";
const DB_NAME = "ocean-bancodados-09-02-2023";

async function main() {
  // Conexão com o banco de dados
  console.log("Conectando com o banco de dados...");
  const client = await MongoClient.connect(DB_URL);
  const db = client.db(DB_NAME);
  const collection = db.collection("itens");
  console.log("Banco de dados conectado com sucesso!");

  const app = express();

  // Habilita o CORS
  app.use(cors());

  // O que vier no body da requisição, está em JSON
  app.use(express.json());

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
  app.get("/item", async function (req, res) {
    const documentos = await collection.find().toArray();
    res.send(documentos);
  });

  // Endpoint Read Single by ID -> [GET] /item/:id
  app.get("/item/:id", async function (req, res) {
    const id = req.params.id;
    const item = await collection.findOne({ _id: new ObjectId(id) });
    res.send(item);
  });

  // Endpoint Create -> [POST] /item
  app.post("/item", async function (req, res) {
    // console.log(req.body);
    const item = req.body;
    await collection.insertOne(item);
    res.send(item);
  });

  // Endpoint Update -> [PUT] /item/:id
  app.put("/item/:id", async function (req, res) {
    const id = req.params.id;
    const body = req.body;

    // console.log(id, body);

    await collection.updateOne({ _id: new ObjectId(id) }, { $set: body });

    res.send(body);
  });

  // Endpoint Delete -> [DELETE] /item/:id
  // Exercício:
  // - pesquisar sobre a operação de remover itens
  // - implementar o endpoint de delete
  // - realizar a operação de excluir item

  app.delete("/item/:id", async function (req, res) {
    const id = req.params.id;

    await collection.deleteOne({ _id: new ObjectId(id) });

    res.send("Registro removido com sucesso!");
  });

  const port = process.env.PORT || 3000;
  app.listen(port, function () {
    console.log("Servidor rodando na porta: " + port);
  });
}

main();
