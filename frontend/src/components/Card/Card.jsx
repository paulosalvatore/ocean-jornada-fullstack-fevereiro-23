import "./Card.css";

function Card(props) {
  // console.log(props);
  const item = props.item;

  const tags = item.tags;
  console.log(tags);

  return (
    <div className="card">
      <h1>{item.nome}</h1>

      <div className="tag-wrapper">
        <div className="tag">Tag 1</div>
        <div className="tag">Tag 2</div>
      </div>

      <img src={item.imagemUrl} />
    </div>
  );
}

export default Card;
