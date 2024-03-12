import {useState, useEffect} from "react";

function Header() {
//   const [isVisible, setIsVisible] = useState(true);
//   const[height, setHeight] = useState(0);

//   useEffect(() => {
//     window.addEventListener("scroll", listenToScroll);
//     return () =>
//        window.removeEventListener("scroll", listenToScroll);
//   }, [])

//   const listenToScroll = () => {
//     let heightToHideFrom = 200;
//     const winScroll = document.body.scrollTop ||
//         document.documentElement.scrollTop;
//     setHeight(winScroll);

//     if (winScroll > heightToHideFrom) {
//          isVisible && setIsVisible(false);
//     } else {
//          setIsVisible(true);
//     }
//   };

  return(
    <div className="header">
      <img src="/images/trolls.jpg" alt="branch from trolls"/>
      <p>trols</p>
      <p>trols</p>
      <p>trols</p>

  </div>
  );

}

export default Header;