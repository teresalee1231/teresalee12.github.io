function Card(props) {
  return (
    <div className="card">
      <p className="proj-title">{props.title}</p>
      <img className="proj-img" src={props.img} alt={props.alt}/>
    </div>
  );
}

export default Card;