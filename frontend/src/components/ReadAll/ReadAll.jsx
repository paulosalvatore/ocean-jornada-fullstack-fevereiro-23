import "./ReadAll.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

// Mock Items (exatamente a mesma estrutura que o back traria)
// Isso facilita o trabalho aqui no Front, para conseguir estruturar
// comportamento, sem precisar depender do back para receber dados
const itemsMock = [
  {
    _id: "63ee1e0b18f2b9a93da8435a",
    nome: "Rick Sanchez",
    imagemUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    tags: ["Status: Vivo", "Espécie: Humana", "Origem: Terra C-137"],
  },
  {
    _id: "63ef87c74522de2944ab1fa8",
    nome: "Morty Smith",
    imagemUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
  {
    _id: "63ef87cc4522de2944ab1fa9",
    nome: "Summer Smith",
    imagemUrl: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
  {
    _id: "63ef87d44522de2944ab1faa",
    nome: "Beth Smith",
    imagemUrl: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  },
  {
    _id: "63ef87e24522de2944ab1fab",
    nome: "Jerry Smith",
    imagemUrl: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
  },
];

/*
- Para cada item da lista, exibe um card do Rick Sanchez
- Pegar a informação de cada item e enviar para o componente <Card />
- A informação recebida no card deve ser exibida no console.log
- Pegar cada parte da informação recebida e colocá-la nos elementos de HTML
*/

// Sintaxe de concatenação de variáveis dentro do JSX, chaves: {}
// { VARIAVEL }
// Concatenar = unir de forma lógica

// Na verdade, as chaves representam que código JavaScript pode ser
// inserido dentro delas

function ReadAll() {
  // useState retorna 2 coisas:
  // 1: o valor do estado
  // 2: a função que atualiza o valor do estado
  //   const estadoItems = useState([]);
  //   const items = estadoItems[0];
  //   const setItems = estadoItems[1];
  const [items, setItems] = useState([]);

  // Realizar requisição para backend obtendo a lista de itens
  async function realizarRequisicao() {
    // const url = "http://localhost:3000/item";
    const url = "https://ocean-jornada-fullstack-fevereiro-23-jmkv.onrender.com/item";
    const response = await fetch(url);
    const data = await response.json();

    setItems(data);
  }

  // UseEffect
  // 1: uma função que será executada
  // 2: uma lista de dependências
  useEffect(function () {
    realizarRequisicao();
  }, []);

  //   console.log(67, items);

  return (
    <div className="ReadAll">
      {items.map(function (item) {
        // console.log(item);
        // Key -> card-1234
        return <Card key={"card-" + item._id} item={item} />;
      })}
    </div>
  );
}

export default ReadAll;
