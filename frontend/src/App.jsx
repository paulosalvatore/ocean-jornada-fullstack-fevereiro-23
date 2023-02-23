import "./App.css";
import Header from "./components/Header/Header";
import ReadAll from "./components/ReadAll/ReadAll";

/**
 * Novos desafios!
 *
 * Tecnologias: ReactJS; Criação de componente; UseState; UseEffect.
 * 1. Criar um componente ReadById
 * 2. Dentro do componente, realizar uma requisição para o endpoint de Read by ID no backend
 * 3. Pegar as informações do backend e enviar para o componente Card
 *
 * Dica: Pode ocultar o componente ReadAll enquanto tiver construindo o ReadById, para não
 * se confundir nas requisições
 */

function App() {
  return (
    <div className="App">
      <Header />
      <ReadAll />
    </div>
  );
}

export default App;
