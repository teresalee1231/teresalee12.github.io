function Card(props) {
  return (
    <div className="card">
      <a href={props.link}>
        <p className="proj-title">{props.title}</p>
      </a>
      <img className="proj-img" src={props.img} alt={props.alt}/>
    </div>
  );
}

export default Card;