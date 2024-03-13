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
      <p>Github</p>
      <p>Linkedin</p>
      <p>Resume</p>
  </div>
  );

}

export default Header;