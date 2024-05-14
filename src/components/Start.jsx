import {useState, useEffect} from "react";

function Start() {
  const [isblur, setBlur] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
       window.removeEventListener("scroll", listenToScroll);
  }, [])

  const listenToScroll = () => {
    if (window.scrollY > window.innerHeight / 4) {
         setBlur(true);
    } else {
         setBlur(false);
    }
  };

  return(
    <div className={`start ${isblur && "blur"}`}>
      <div className="copy">
        <h1>Teresa Lee</h1>
      </div>

      {/* <img src="images/eviesleeping.jpg" alt="Mostly black chiweenie sleeping on bed"/> */}
    </div>
  );
}

export default Start;