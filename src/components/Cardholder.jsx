import Card from "./Card.jsx";
function Cardholder() {
  return(
    <div className="format">
      <div id="title-placement">
        <p>Trols</p>
      </div>

      <div id="card-holder">

        <Card
          img="images/trolls.jpg"
          link="https://research.fredhutch.org/wu/en/michael-wu.html"
          title="Trols"
          alt="Branch from tolls"
        />
        <Card
          img="images/kv2square.png"
          link="https://slimesnboxes.pages.dev/"
          title="CSE Games Capstone - Slimes 'n' Boxes"
          alt="Branch from tolls"
        />

        <Card
          img="images/trolls.jpg"
          link="https://cse442.pages.cs.washington.edu/au22/fp/CoolestGroup/"
          title="Trols"
          alt="Branch from tolls"
        />

        <Card
          img="images/stylegan.png"
          link="https://www.youtube.com/watch?v=_x7jpMqJFF0"
          title="Exploration Topic - StyleGANs"
          alt="Branch from tolls"
        />


        <Card
          img="images/catdog.png"
          link="https://cat-dog.jhyn.dev/"
          title="Image Classification - Cat vs Dog"
          alt="Branch from tolls"
        />

        <Card
          img="images/trolls.jpg"
          link="https://www.google.com/"
          title="Trols"
          alt="Branch from Trolls"
        />
      </div>
    </div>

  );
}

export default Cardholder;