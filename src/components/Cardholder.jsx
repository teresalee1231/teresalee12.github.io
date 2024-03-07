import Card from "./Card.jsx";
function Cardholder() {
  return(
    <div className="format">
      <div id="test">
        <p>Trols</p>
      </div>

      <div id="card-holder">

        <Card
          img="images/trolls.jpg"
          title="Trols"
        />
        <Card
          img="images/trolls.jpg"
          title="Trols"
        />

        <Card
          img="images/trolls.jpg"
          title="Trols"
        />

        <Card
          img="images/trolls.jpg"
          title="Trols"
        />


        <Card
          img="images/trolls.jpg"
          title="Trols"
        />

        <Card
          img="images/trolls.jpg"
          title="Trols"
        />
      </div>
    </div>

  );
}

export default Cardholder;