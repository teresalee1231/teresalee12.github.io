function Card(props) {
  return (
    <div className="card">
      <div className="card-info">
        <img className="proj-img" src={props.img} alt={props.alt}/>
        <div className="proj-title">{props.title}</div>
        <div className="proj-subtitle">{props.subtitle}</div>
        <a href={props.link}>
          <div className="link">Link to project!</div>
          </a>

      </div>

    </div>
  );
}

export default Card;