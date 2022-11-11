import React from "react";
import "./Home.css"



const Home = () => {
  return (
<React.Fragment>
  <div className="homecontainer"></div>
  
<div className="header">
  <h1> WELCOME TO xCONTACT SYSTEM</h1>
  <br></br>
  <h2>We save your contact in good way.</h2>
</div>

<br></br>

<div className="input">
  <a href="/student">
  <button className="btn"> JOIN US </button>
  </a>
</div>

</React.Fragment>
  );
};
export default Home;