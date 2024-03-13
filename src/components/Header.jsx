import {useState, useEffect} from "react";
import { animateScroll as scroll } from "react-scroll";

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
       window.removeEventListener("scroll", listenToScroll);
  }, [])

  const listenToScroll = () => {
    if (window.scrollY > window.innerHeight - 150) {
         setIsVisible(true);
    } else {
         setIsVisible(false);
    }
  };

  return(
    <div className={`header ${isVisible && "active"}`}>
      <img src="/images/trolls.jpg" alt="branch from trolls"/>
      <a href="https://github.com/teresalee1231/">
        <p>Github</p>
      </a>
      <a href="https://www.linkedin.com/in/teresa-lee-171360198/">
        <p>Linkedin</p>
      </a>
      <a href="/TeresaLeeResume.pdf">
        <p>Resume</p>
      </a>

  </div>
  );

}

export default Header;