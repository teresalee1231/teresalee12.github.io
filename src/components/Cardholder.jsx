import Card from "./Card.jsx";
function Cardholder() {
  return(
    <div className="format">
      <div id="title-placement">
        <h2>Projects</h2>
      </div>

      <div id="card-holder">

        <Card
          img="images/fred-hutch-logo.png"
          link="https://www.biorxiv.org/content/10.1101/2023.09.22.559069v1"
          title="Fred Hutch - SurvBal"
          alt="Fred Hutch Logo"
        />
        <Card
          img="images/kv2square.png"
          link="https://slimesnboxes.pages.dev/"
          title="CSE Games Capstone - Slimes 'n' Boxes"
          alt="Thumbnail for Slimes 'n' Boxes"
        />

        <Card
          img="images/pokeball.png"
          link="https://cse442.pages.cs.washington.edu/au22/fp/CoolestGroup/"
          title="CSE 442 - Pokemon Stats Distribution"
          alt="Pokeball from the game Pokemon"
        />

        <Card
          img="images/stylegan.png"
          link="https://www.youtube.com/watch?v=_x7jpMqJFF0"
          title="Exploration Topic - StyleGANs"
          alt="StyleGAN character drawn by me"
        />


        <Card
          img="images/catdog.png"
          link="https://cat-dog.jhyn.dev/"
          title="Image Classification - Cat vs Dog"
          alt="Cat character drawn by me"
        />

        <Card
          img="images/filler.png"
          link="https://github.com/teresalee1231/"
          title="More projects coming soon :)"
          alt="Branch from Trolls"
        />
      </div>
    </div>

  );
}

export default Cardholder;