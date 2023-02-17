import "./ReadAll.css";
import Card from "../Card/Card";

// Mock Items (exatamente a mesma estrutura que o back traria)
// Isso facilita o trabalho aqui no Front, para conseguir estruturar
// comportamento, sem precisar depender do back para receber dados
const items = [
    {
        _id: '1234',
        nome: 'Rick Sanchez',
        imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
        _id: '5678',
        nome: 'Morty Smith',
        imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
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
    return <div className="ReadAll">
        {items.map(function (item) {
            // console.log(item);
            // Key -> card-1234
            return <Card key={'card-' + item._id} item={item} />;
        })}
    </div>
}

export default ReadAll;
