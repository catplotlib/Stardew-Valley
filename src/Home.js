import gpay from "./assets/gpay.png";
import logo from "./assets/logo.png";
import steam from "./assets/steam.png";
import abigail from "./assets/abigail.png";
import el from "./assets/elliot.png";

function Home() {
  return (
    <>
      <img className="Star" src={logo} alt="logo" />
      {/* Laptop */}
      <div className="row desk">
        <div className="column">
          <img src={abigail} className="abi" alt="logo" />
        </div>

        <div className="column">
          <a href="https://store.steampowered.com/app/413150/Stardew_Valley/">
            <img src={steam} className="steam" alt="logo" />
          </a>
        </div>

        <div className="column"></div>
        <img src={el} className="el" alt="logo" />
      </div>

      {/* mobile */}

      <div className="div-only-mobile">
        <div className="row">
          <div className="column">
            <img src={steam} className="steam" alt="logo" />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <img src={abigail} className="abi" alt="logo" />
          </div>
          <div className="column"></div>
          <img src={el} className="el" alt="logo" />
        </div>
        <br />
      </div>
    </>
  );
}

export default Home;
