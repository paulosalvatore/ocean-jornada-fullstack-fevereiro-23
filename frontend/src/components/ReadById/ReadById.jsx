import { useEffect, useState } from "react";
import Card from "../Card/Card";

function ReadById() {
  //   let item = undefined;
  const [item, setItem] = useState();

  const id = "63f8d08ec538bfcb679d2da4";

  async function realizarRequisicao() {
    const url = "http://localhost:3000/item/" + id; // Concatenação normal
    // const url = `http://localhost:3000/item/${id}`; // Template string
    // url = http://localhost:3000/item/63ee1e0b18f2b9a93da8435a

    const response = await fetch(url);
    const data = await response.json();

    console.log("data", data);

    // item = data;
    setItem(data);

    console.log("item 22", item);
  }

  useEffect(function () {
    console.log("Executar apenas uma vez");
    realizarRequisicao();
  }, []);

  console.log("item 30", item);

  if (!item) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="ReadById">
      <Card item={item} />
    </div>
  );
}

export default ReadById;
