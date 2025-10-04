import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="format">
      <div className="about">
        <div className="main-pic">
          <Link to="/story">
          <img src="images/me.jpg" alt="Branch from Trolls"/>
          </Link>

        </div>

        <div className="paragraph">
          <h1>Hi, I'm Teresa!</h1>
          <p>I am a software engineer born and raised in Seattle! I am passonate
            about creativity and creating technology for the community.
            I'm always looking forward to new opportunities to showcase
            my skillset, improving on what I know, and learning new things.
            If you would like to chat or connect, feel free
            to <a href="mailto:teresalee1231@gmail.com">email</a> me!
          </p>
          <p>As of right now, I am currently on the Leetcode grind (:c)
            Stay tuned for more updates on my website.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;